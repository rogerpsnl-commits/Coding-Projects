import { createContext, useContext, useReducer, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { DEFAULT_CATEGORY_COLORS, nextAutoColor } from '../utils/categoryColors'

const AppContext = createContext(null)

const DEFAULT_CATEGORIES = ['Family', 'Work', 'Wellbeing']

function generateInviteCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

function loadUsers() {
  try { return JSON.parse(localStorage.getItem('taskify_users') || '[]') } catch { return [] }
}
function loadCurrentUser() {
  try { return JSON.parse(localStorage.getItem('taskify_current_user') || 'null') } catch { return null }
}
function loadTasks(userId) {
  try { return JSON.parse(localStorage.getItem(`taskify_tasks_${userId}`) || '[]') } catch { return [] }
}
function loadCategories(userId) {
  try {
    const saved = localStorage.getItem(`taskify_categories_${userId}`)
    return saved ? JSON.parse(saved) : DEFAULT_CATEGORIES
  } catch { return DEFAULT_CATEGORIES }
}
function loadApiKey() {
  try {
    const stored = localStorage.getItem('taskify_api_key')
    return stored || import.meta.env.VITE_ANTHROPIC_API_KEY || ''
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
function loadCategoryColors(userId) {
  try {
    const saved = localStorage.getItem(`taskify_cat_colors_${userId}`)
    return saved ? JSON.parse(saved) : { ...DEFAULT_CATEGORY_COLORS }
  } catch { return { ...DEFAULT_CATEGORY_COLORS } }
}
function saveUsers(users) { localStorage.setItem('taskify_users', JSON.stringify(users)) }
function saveTasks(userId, tasks) { localStorage.setItem(`taskify_tasks_${userId}`, JSON.stringify(tasks)) }
function saveCategories(userId, categories) { localStorage.setItem(`taskify_categories_${userId}`, JSON.stringify(categories)) }
function saveCategoryColors(userId, colors) { localStorage.setItem(`taskify_cat_colors_${userId}`, JSON.stringify(colors)) }

const initialState = {
  user: loadCurrentUser(),
  tasks: [],
  categories: DEFAULT_CATEGORIES,
  categoryColors: { ...DEFAULT_CATEGORY_COLORS },
  activeCategory: 'All',
  apiKey: loadApiKey(),
  showAddModal: false,
  showInviteModal: false,
  showAIAssist: false,
  showSettings: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'BOOT': {
      const tasks = loadTasks(action.user.id)
      const categories = loadCategories(action.user.id)
      const categoryColors = loadCategoryColors(action.user.id)
      return { ...state, user: action.user, tasks, categories, categoryColors }
    }
    case 'LOGOUT':
      return { ...initialState, user: null, tasks: [], categories: DEFAULT_CATEGORIES, categoryColors: { ...DEFAULT_CATEGORY_COLORS }, apiKey: state.apiKey }

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
      if (state.categories.includes(action.payload)) return state
      const autoColor = nextAutoColor(state.categoryColors)
      return {
        ...state,
        categories: [...state.categories, action.payload],
        categoryColors: { ...state.categoryColors, [action.payload]: autoColor },
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

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.user) dispatch({ type: 'BOOT', user: state.user })
  }, [])

  useEffect(() => {
    if (state.user) saveTasks(state.user.id, state.tasks)
  }, [state.tasks, state.user])

  useEffect(() => {
    if (state.user) saveCategories(state.user.id, state.categories)
  }, [state.categories, state.user])

  useEffect(() => {
    if (state.user) saveCategoryColors(state.user.id, state.categoryColors)
  }, [state.categoryColors, state.user])

  const actions = {
    login(username, password) {
      const users = loadUsers()
      const user = users.find(u => u.username.toLowerCase() === username.toLowerCase())
      if (!user) return { error: 'No account found with that username.' }
      if (user.password !== password) return { error: 'Incorrect password.' }
      localStorage.setItem('taskify_current_user', JSON.stringify(user))
      dispatch({ type: 'BOOT', user })
      return {}
    },

    register(username, email, password) {
      const users = loadUsers()
      if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
        return { error: 'Username already taken.' }
      }
      const user = { id: uuid(), username, email, password, inviteCode: generateInviteCode() }
      saveUsers([...users, user])
      localStorage.setItem('taskify_current_user', JSON.stringify(user))
      dispatch({ type: 'BOOT', user })
      return {}
    },

    logout() {
      localStorage.removeItem('taskify_current_user')
      dispatch({ type: 'LOGOUT' })
    },

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
    },

    updateTask(task) {
      dispatch({ type: 'UPDATE_TASK', payload: task })
    },

    // Mark complete; if recurring + has deadline, auto-create the next occurrence
    completeTask(task) {
      dispatch({ type: 'UPDATE_TASK', payload: { ...task, completed: true } })
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
      }
    },

    deleteTask(id) {
      dispatch({ type: 'DELETE_TASK', payload: id })
    },

    reorderTasks(tasks) {
      dispatch({ type: 'REORDER_TASKS', payload: tasks })
    },

    setActiveCategory(cat) {
      dispatch({ type: 'SET_ACTIVE_CATEGORY', payload: cat })
    },

    addCategory(name) {
      dispatch({ type: 'ADD_CATEGORY', payload: name })
    },

    removeCategory(name) {
      dispatch({ type: 'REMOVE_CATEGORY', payload: name })
    },

    renameCategory(oldName, newName) {
      dispatch({ type: 'RENAME_CATEGORY', payload: { oldName, newName } })
    },

    setCategoryColor(name, color) {
      dispatch({ type: 'SET_CATEGORY_COLOR', payload: { name, color } })
    },

    setApiKey(key) {
      localStorage.setItem('taskify_api_key', key)
      dispatch({ type: 'SET_API_KEY', payload: key })
    },

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
