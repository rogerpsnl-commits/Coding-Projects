import { createContext, useContext, useReducer, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { DEFAULT_CATEGORY_COLORS, nextAutoColor } from '../utils/categoryColors'
import { supabase } from '../lib/supabase'

const AppContext = createContext(null)

const DEFAULT_CATEGORIES = ['Family', 'Work', 'Wellbeing']

function loadApiKey() {
  try {
    return localStorage.getItem('taskify_api_key') || import.meta.env.VITE_ANTHROPIC_API_KEY || ''
  } catch { return '' }
}

function nextDeadline(deadline, recurrence) {
  if (!deadline) return ''
  const d = new Date(deadline + 'T00:00:00')
  switch (recurrence) {
    case 'daily':   d.setDate(d.getDate() + 1); break
    case 'weekly':  d.setDate(d.getDate() + 7); break
    case 'monthly': d.setMonth(d.getMonth() + 1); break
    case 'yearly':  d.setFullYear(d.getFullYear() + 1); break
  }
  return d.toISOString().split('T')[0]
}

// ── DB shape converters ──────────────────────────────────────────────────────

function rowToTask(row) {
  return {
    id: row.id,
    name: row.name,
    description: row.description || '',
    priority: row.priority || 'medium',
    category: row.category || '',
    deadline: row.deadline || '',
    recurrence: row.recurrence || null,
    completed: row.completed || false,
    createdAt: row.created_at,
    sortOrder: row.sort_order,
  }
}

function taskToRow(task, userId) {
  return {
    id: task.id,
    user_id: userId,
    name: task.name,
    description: task.description || '',
    priority: task.priority || 'medium',
    category: task.category || '',
    deadline: task.deadline || '',
    recurrence: task.recurrence || null,
    completed: task.completed || false,
    sort_order: task.sortOrder ?? 0,
    created_at: task.createdAt ?? Date.now(),
  }
}

// ── Load user data from Supabase ─────────────────────────────────────────────

async function loadUserData(userId) {
  const [{ data: taskRows, error: taskErr }, { data: catRows, error: catErr }] = await Promise.all([
    supabase.from('tasks').select('*').eq('user_id', userId).order('sort_order'),
    supabase.from('categories').select('*').eq('user_id', userId).order('sort_order'),
  ])

  if (taskErr) console.error('tasks load error:', taskErr)
  if (catErr) console.error('categories load error:', catErr)

  const tasks = (taskRows || []).map(rowToTask)

  let categories = DEFAULT_CATEGORIES
  let categoryColors = { ...DEFAULT_CATEGORY_COLORS }

  if (catRows && catRows.length > 0) {
    categories = catRows.map(r => r.name)
    categoryColors = {}
    for (const r of catRows) categoryColors[r.name] = r.color || 'blue'
  } else {
    // First sign-in: seed default categories
    const seedRows = DEFAULT_CATEGORIES.map((name, i) => ({
      user_id: userId,
      name,
      color: DEFAULT_CATEGORY_COLORS[name] || 'blue',
      sort_order: i,
    }))
    await supabase.from('categories').upsert(seedRows, { onConflict: 'user_id,name', ignoreDuplicates: true })
  }

  return { tasks, categories, categoryColors }
}

// ── Reducer ──────────────────────────────────────────────────────────────────

const initialState = {
  user: null,
  tasks: [],
  categories: DEFAULT_CATEGORIES,
  categoryColors: { ...DEFAULT_CATEGORY_COLORS },
  activeCategory: 'All',
  apiKey: loadApiKey(),
  loading: true,
  showAddModal: false,
  showInviteModal: false,
  showAIAssist: false,
  showSettings: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'BOOT':
      return {
        ...state,
        user: action.user,
        tasks: action.tasks,
        categories: action.categories,
        categoryColors: action.categoryColors,
        loading: false,
      }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'LOGOUT':
      return { ...initialState, loading: false, apiKey: state.apiKey }

    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] }
    case 'UPDATE_TASK':
      return { ...state, tasks: state.tasks.map(t => t.id === action.payload.id ? action.payload : t) }
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(t => t.id !== action.payload) }
    case 'REORDER_TASKS':
      return { ...state, tasks: action.payload }

    case 'SET_ACTIVE_CATEGORY':
      return { ...state, activeCategory: action.payload }

    case 'ADD_CATEGORY': {
      const { name, color } = action.payload
      if (state.categories.includes(name)) return state
      return {
        ...state,
        categories: [...state.categories, name],
        categoryColors: { ...state.categoryColors, [name]: color },
      }
    }
    case 'REMOVE_CATEGORY': {
      const categories = state.categories.filter(c => c !== action.payload)
      const tasks = state.tasks.map(t =>
        t.category === action.payload ? { ...t, category: categories[0] || '' } : t
      )
      const { [action.payload]: _removed, ...restColors } = state.categoryColors
      const activeCategory = state.activeCategory === action.payload ? 'All' : state.activeCategory
      return { ...state, categories, tasks, activeCategory, categoryColors: restColors }
    }
    case 'RENAME_CATEGORY': {
      const { oldName, newName } = action.payload
      if (!newName.trim() || state.categories.includes(newName.trim())) return state
      const categories = state.categories.map(c => c === oldName ? newName.trim() : c)
      const tasks = state.tasks.map(t => t.category === oldName ? { ...t, category: newName.trim() } : t)
      const activeCategory = state.activeCategory === oldName ? newName.trim() : state.activeCategory
      const { [oldName]: movedColor, ...restColors } = state.categoryColors
      return { ...state, categories, tasks, activeCategory, categoryColors: { ...restColors, [newName.trim()]: movedColor } }
    }
    case 'SET_CATEGORY_COLOR':
      return { ...state, categoryColors: { ...state.categoryColors, [action.payload.name]: action.payload.color } }

    case 'SET_API_KEY':
      return { ...state, apiKey: action.payload }

    case 'TOGGLE_ADD_MODAL':    return { ...state, showAddModal:    action.payload ?? !state.showAddModal }
    case 'TOGGLE_INVITE_MODAL': return { ...state, showInviteModal:  action.payload ?? !state.showInviteModal }
    case 'TOGGLE_AI_ASSIST':    return { ...state, showAIAssist:     action.payload ?? !state.showAIAssist }
    case 'TOGGLE_SETTINGS':     return { ...state, showSettings:     action.payload ?? !state.showSettings }

    default:
      return state
  }
}

// ── Provider ─────────────────────────────────────────────────────────────────

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Drive auth state from Supabase
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN') {
        if (session?.user) {
          const { tasks, categories, categoryColors } = await loadUserData(session.user.id)
          dispatch({ type: 'BOOT', user: session.user, tasks, categories, categoryColors })
        } else if (event === 'INITIAL_SESSION') {
          dispatch({ type: 'SET_LOADING', payload: false })
        }
      } else if (event === 'SIGNED_OUT') {
        dispatch({ type: 'LOGOUT' })
      } else if (event === 'USER_UPDATED' && session?.user) {
        dispatch({ type: 'BOOT', user: session.user, tasks: state.tasks, categories: state.categories, categoryColors: state.categoryColors })
      }
    })

    return () => subscription.unsubscribe()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const actions = {
    // ── Auth ──────────────────────────────────────────────────────────────────

    async login(email, password) {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      return error ? { error: error.message } : {}
    },

    async register(email, password, username) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { username } },
      })
      return error ? { error: error.message } : {}
    },

    async loginWithGoogle() {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin },
      })
      return error ? { error: error.message } : {}
    },

    async loginWithMicrosoft() {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'azure',
        options: { redirectTo: window.location.origin },
      })
      return error ? { error: error.message } : {}
    },

    async logout() {
      await supabase.auth.signOut()
      // LOGOUT dispatched by onAuthStateChange
    },

    // ── Tasks ─────────────────────────────────────────────────────────────────

    addTask(fields) {
      const task = {
        id: uuid(),
        name: fields.name || 'Untitled Task',
        description: fields.description || '',
        priority: fields.priority || 'medium',
        category: fields.category || state.categories[0] || '',
        deadline: fields.deadline || '',
        recurrence: fields.recurrence || null,
        completed: false,
        createdAt: Date.now(),
        sortOrder: Date.now(),
      }
      dispatch({ type: 'ADD_TASK', payload: task })
      supabase.from('tasks').insert(taskToRow(task, state.user.id))
    },

    updateTask(task) {
      dispatch({ type: 'UPDATE_TASK', payload: task })
      supabase.from('tasks').update(taskToRow(task, state.user.id)).eq('id', task.id)
    },

    completeTask(task) {
      const completed = { ...task, completed: true }
      dispatch({ type: 'UPDATE_TASK', payload: completed })
      supabase.from('tasks').update({ completed: true }).eq('id', task.id)

      if (task.recurrence && task.deadline) {
        const next = {
          id: uuid(),
          name: task.name,
          description: task.description,
          priority: task.priority,
          category: task.category,
          deadline: nextDeadline(task.deadline, task.recurrence),
          recurrence: task.recurrence,
          completed: false,
          createdAt: Date.now(),
          sortOrder: Date.now(),
        }
        dispatch({ type: 'ADD_TASK', payload: next })
        supabase.from('tasks').insert(taskToRow(next, state.user.id))
      }
    },

    deleteTask(id) {
      dispatch({ type: 'DELETE_TASK', payload: id })
      supabase.from('tasks').delete().eq('id', id)
    },

    reorderTasks(tasks) {
      dispatch({ type: 'REORDER_TASKS', payload: tasks })
      supabase.from('tasks').upsert(tasks.map(t => taskToRow(t, state.user.id)))
    },

    // ── Categories ────────────────────────────────────────────────────────────

    setActiveCategory(cat) {
      dispatch({ type: 'SET_ACTIVE_CATEGORY', payload: cat })
    },

    addCategory(name) {
      if (state.categories.includes(name)) return
      const color = nextAutoColor(state.categoryColors)
      dispatch({ type: 'ADD_CATEGORY', payload: { name, color } })
      supabase.from('categories').insert({
        user_id: state.user.id,
        name,
        color,
        sort_order: state.categories.length,
      })
    },

    removeCategory(name) {
      const newCategory = state.categories.filter(c => c !== name)[0] || ''
      dispatch({ type: 'REMOVE_CATEGORY', payload: name })
      supabase.from('categories').delete().eq('user_id', state.user.id).eq('name', name)
      if (newCategory) {
        supabase.from('tasks').update({ category: newCategory })
          .eq('user_id', state.user.id).eq('category', name)
      }
    },

    renameCategory(oldName, newName) {
      const trimmed = newName.trim()
      if (!trimmed || state.categories.includes(trimmed)) return
      dispatch({ type: 'RENAME_CATEGORY', payload: { oldName, newName: trimmed } })
      supabase.from('categories').update({ name: trimmed })
        .eq('user_id', state.user.id).eq('name', oldName)
      supabase.from('tasks').update({ category: trimmed })
        .eq('user_id', state.user.id).eq('category', oldName)
    },

    setCategoryColor(name, color) {
      dispatch({ type: 'SET_CATEGORY_COLOR', payload: { name, color } })
      supabase.from('categories').update({ color })
        .eq('user_id', state.user.id).eq('name', name)
    },

    // ── Settings ──────────────────────────────────────────────────────────────

    setApiKey(key) {
      localStorage.setItem('taskify_api_key', key)
      dispatch({ type: 'SET_API_KEY', payload: key })
    },

    // ── Modals ────────────────────────────────────────────────────────────────

    openAddModal()    { dispatch({ type: 'TOGGLE_ADD_MODAL',    payload: true }) },
    closeAddModal()   { dispatch({ type: 'TOGGLE_ADD_MODAL',    payload: false }) },
    openInviteModal() { dispatch({ type: 'TOGGLE_INVITE_MODAL', payload: true }) },
    closeInviteModal(){ dispatch({ type: 'TOGGLE_INVITE_MODAL', payload: false }) },
    openAIAssist()    { dispatch({ type: 'TOGGLE_AI_ASSIST',    payload: true }) },
    closeAIAssist()   { dispatch({ type: 'TOGGLE_AI_ASSIST',    payload: false }) },
    openSettings()    { dispatch({ type: 'TOGGLE_SETTINGS',     payload: true }) },
    closeSettings()   { dispatch({ type: 'TOGGLE_SETTINGS',     payload: false }) },
  }

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
