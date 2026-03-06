import { useState, useRef } from 'react'
import { useApp } from '../context/AppContext'
import { getCategoryColor } from '../utils/categoryColors'

const RECURRENCE_LABELS = {
  daily: '↻ Daily', weekly: '↻ Weekly', monthly: '↻ Monthly', yearly: '↻ Yearly',
}
const RECURRENCE_OPTIONS = [
  { value: null,      label: 'None' },
  { value: 'daily',   label: 'Daily' },
  { value: 'weekly',  label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'yearly',  label: 'Yearly' },
]

export const PRIORITY_CONFIG = {
  low: {
    label: 'Low',
    headerBg: 'bg-emerald-500',
    text: 'text-white',
    handleColor: 'text-white/50 hover:text-white',
    badgeBg: 'bg-white/20 text-white',
    chevronColor: 'text-white/60',
    checkBorder: 'border-white/50',
    checkActiveBg: 'bg-white',
    checkActiveIcon: 'text-emerald-500',
    selectorActive: 'bg-emerald-50 text-emerald-700 ring-2 ring-emerald-300',
  },
  medium: {
    label: 'Medium',
    headerBg: 'bg-amber-400',
    text: 'text-gray-900',
    handleColor: 'text-gray-800/40 hover:text-gray-900',
    badgeBg: 'bg-black/10 text-gray-900',
    chevronColor: 'text-gray-800/60',
    checkBorder: 'border-gray-700/40',
    checkActiveBg: 'bg-gray-900',
    checkActiveIcon: 'text-amber-400',
    selectorActive: 'bg-amber-50 text-amber-700 ring-2 ring-amber-300',
  },
  high: {
    label: 'High',
    headerBg: 'bg-orange-500',
    text: 'text-white',
    handleColor: 'text-white/50 hover:text-white',
    badgeBg: 'bg-white/20 text-white',
    chevronColor: 'text-white/60',
    checkBorder: 'border-white/50',
    checkActiveBg: 'bg-white',
    checkActiveIcon: 'text-orange-500',
    selectorActive: 'bg-orange-50 text-orange-700 ring-2 ring-orange-300',
  },
  critical: {
    label: 'Critical',
    headerBg: 'bg-red-500',
    text: 'text-white',
    handleColor: 'text-white/50 hover:text-white',
    badgeBg: 'bg-white/20 text-white',
    chevronColor: 'text-white/60',
    checkBorder: 'border-white/50',
    checkActiveBg: 'bg-white',
    checkActiveIcon: 'text-red-500',
    selectorActive: 'bg-red-50 text-red-700 ring-2 ring-red-300',
  },
}

function formatDeadline(deadline, isMedium) {
  if (!deadline) return null
  const today = new Date().toISOString().split('T')[0]
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]
  const date = new Date(deadline + 'T00:00:00')
  const label = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

  if (isMedium) {
    if (deadline < today)  return { label: `Overdue · ${label}`, color: 'text-red-700' }
    if (deadline === today) return { label: `Due today · ${label}`, color: 'text-amber-700' }
    if (deadline === tomorrow) return { label: `Due tomorrow · ${label}`, color: 'text-gray-600' }
    return { label: `Due ${label}`, color: 'text-gray-600' }
  }

  if (deadline < today)  return { label: `Overdue · ${label}`, color: 'text-red-200' }
  if (deadline === today) return { label: `Due today · ${label}`, color: 'text-yellow-200' }
  if (deadline === tomorrow) return { label: `Due tomorrow · ${label}`, color: 'text-white/70' }
  return { label: `Due ${label}`, color: 'text-white/60' }
}

/**
 * TaskCard — pure display + expand/edit.
 * Drag behavior is injected via `dragHandleProps` from SortableTaskCard.
 * When `dragHandleProps` is null the handle icon is rendered but inert.
 */
export default function TaskCard({ task, dragHandleProps = null, isDragging = false }) {
  const { state, actions } = useApp()
  const { categoryColors } = state
  const [expanded, setExpanded] = useState(false)
  const [editing, setEditing] = useState({ ...task })

  // Swipe-to-complete state
  const swipeStartX = useRef(0)
  const swipeStartY = useRef(0)
  const [swipeX, setSwipeX] = useState(0)
  const SWIPE_THRESHOLD = 80

  const pc = PRIORITY_CONFIG[task.priority] || PRIORITY_CONFIG.medium
  const isMedium = task.priority === 'medium'
  const deadlineInfo = formatDeadline(task.deadline, isMedium)

  function saveEdits() {
    actions.updateTask({ ...task, ...editing })
  }

  function handleToggleExpand(e) {
    if (e.target.closest('[data-drag-handle]')) return
    setExpanded(v => !v)
    if (!expanded) setEditing({ ...task })
  }

  function handleComplete(e) {
    e.stopPropagation()
    if (task.completed) {
      actions.updateTask({ ...task, completed: false })
    } else {
      actions.completeTask(task)
    }
  }

  // Swipe gesture handlers
  function onTouchStart(e) {
    swipeStartX.current = e.touches[0].clientX
    swipeStartY.current = e.touches[0].clientY
    setSwipeX(0)
  }

  function onTouchMove(e) {
    const dx = e.touches[0].clientX - swipeStartX.current
    const dy = Math.abs(e.touches[0].clientY - swipeStartY.current)
    if (dy > 20) { setSwipeX(0); return } // too much vertical → not a swipe
    if (dx > 0) setSwipeX(Math.min(dx, SWIPE_THRESHOLD + 20)) // only right-swipe
  }

  function onTouchEnd() {
    if (swipeX >= SWIPE_THRESHOLD && !task.completed) {
      actions.completeTask(task)
    }
    setSwipeX(0)
  }

  function handlePrioritySelect(key) {
    const updated = { ...editing, priority: key }
    setEditing(updated)
    actions.updateTask({ ...task, ...updated })
  }

  function handleCategorySelect(cat) {
    const updated = { ...editing, category: cat }
    setEditing(updated)
    actions.updateTask({ ...task, ...updated })
  }

  function handleDeadlineChange(value) {
    const updated = { ...editing, deadline: value }
    setEditing(updated)
    actions.updateTask({ ...task, ...updated })
  }

  const handleAttrs = dragHandleProps
    ? { ...dragHandleProps.attributes, ...dragHandleProps.listeners }
    : {}

  const swipeProgress = Math.min(swipeX / SWIPE_THRESHOLD, 1)

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-sm transition-shadow duration-200 relative ${
        isDragging ? 'shadow-none' : 'hover:shadow-md'
      } ${task.completed ? 'opacity-55' : ''}`}
    >
      {/* Swipe-to-complete green reveal layer */}
      {swipeX > 0 && (
        <div
          className="absolute inset-0 bg-emerald-500 rounded-2xl flex items-center pl-5 gap-2 z-0"
          style={{ opacity: swipeProgress }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
            <path d="M5 13 L9 17 L19 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-white font-semibold text-sm">Complete</span>
        </div>
      )}

      {/* ── Colored priority header ── */}
      <div
        className={`${pc.headerBg} flex items-center gap-3 px-4 py-3.5 cursor-pointer select-none relative z-10`}
        style={{ transform: `translateX(${swipeX}px)`, transition: swipeX === 0 ? 'transform 0.2s ease' : 'none' }}
        onClick={handleToggleExpand}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Drag handle */}
        <div
          data-drag-handle
          {...handleAttrs}
          className={`flex-shrink-0 touch-none p-1 -ml-1 transition-colors ${pc.handleColor} ${
            dragHandleProps ? 'cursor-grab active:cursor-grabbing' : 'cursor-default opacity-30'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <circle cx="9"  cy="5"  r="1.5"/><circle cx="15" cy="5"  r="1.5"/>
            <circle cx="9"  cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/>
            <circle cx="9"  cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/>
          </svg>
        </div>

        {/* Name + deadline */}
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-semibold truncate ${pc.text} ${task.completed ? 'line-through opacity-60' : ''}`}>
            {task.name || 'Untitled Task'}
          </p>
          {deadlineInfo && (
            <p className={`text-xs mt-0.5 ${deadlineInfo.color}`}>{deadlineInfo.label}</p>
          )}
        </div>

        {/* Category badge */}
        <span className={`flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${pc.badgeBg}`}>
          {task.category}
        </span>

        {/* Recurrence badge */}
        {task.recurrence && (
          <span className={`flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full bg-black/10 ${pc.text}`}>
            {RECURRENCE_LABELS[task.recurrence]}
          </span>
        )}

        {/* Priority label */}
        <span className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-black/15 ${pc.text}`}>
          {pc.label}
        </span>

        {/* Complete toggle */}
        <button
          onClick={handleComplete}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-150 ${
            task.completed
              ? `${pc.checkActiveBg} border-transparent`
              : `${pc.checkBorder} hover:border-white`
          }`}
        >
          {task.completed && (
            <svg viewBox="0 0 24 24" fill="none" className={`w-3 h-3 ${pc.checkActiveIcon}`}>
              <path d="M5 13 L9 17 L19 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>

        {/* Chevron */}
        <svg
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          className={`flex-shrink-0 w-4 h-4 transition-transform duration-200 ${pc.chevronColor} ${expanded ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>

      {/* ── Expandable body ── */}
      <div className={`task-body ${expanded ? 'open' : ''}`}>
        <div>
          <div className="bg-white px-4 pb-5 pt-4 flex flex-col gap-4">

            {/* Task name */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Task Name</label>
              <input
                value={editing.name}
                onChange={e => setEditing(v => ({ ...v, name: e.target.value }))}
                onBlur={saveEdits}
                className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Description</label>
              <textarea
                value={editing.description}
                onChange={e => setEditing(v => ({ ...v, description: e.target.value }))}
                onBlur={saveEdits}
                rows={3}
                placeholder="Add details..."
                className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition resize-none"
              />
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Deadline</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4 text-gray-400">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <input
                  type="date"
                  value={editing.deadline || ''}
                  onChange={e => handleDeadlineChange(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-gray-700"
                />
                {editing.deadline && (
                  <button
                    onClick={() => handleDeadlineChange('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-3.5 h-3.5">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Recurrence */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Recurrence</label>
              <div className="flex flex-wrap gap-2">
                {RECURRENCE_OPTIONS.map(opt => (
                  <button
                    key={String(opt.value)}
                    onClick={() => {
                      const updated = { ...editing, recurrence: opt.value }
                      setEditing(updated)
                      actions.updateTask({ ...task, ...updated })
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-150 active:scale-95 ${
                      (editing.recurrence ?? null) === opt.value
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {editing.recurrence && !editing.deadline && (
                <p className="text-xs text-amber-600 mt-1.5">Set a deadline so the next occurrence can be auto-scheduled.</p>
              )}
            </div>

            {/* Priority selector */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Priority</label>
              <div className="grid grid-cols-4 gap-2">
                {Object.entries(PRIORITY_CONFIG).map(([key, cfg]) => (
                  <button
                    key={key}
                    onClick={() => handlePrioritySelect(key)}
                    className={`py-2 rounded-xl text-xs font-semibold border-2 transition-all duration-150 active:scale-95 ${
                      editing.priority === key
                        ? cfg.selectorActive + ' border-transparent'
                        : 'bg-white text-gray-400 border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    {cfg.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category selector */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Category</label>
              <div className="flex flex-wrap gap-2">
                {state.categories.map(cat => {
                  const clr = getCategoryColor(cat, categoryColors)
                  const isSelected = editing.category === cat
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-150 active:scale-95 ${
                        isSelected
                          ? `${clr.badge} ring-2 ${clr.ring}`
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Delete */}
            <button
              onClick={() => actions.deleteTask(task.id)}
              className="flex items-center gap-2 text-red-400 hover:text-red-600 text-sm font-medium transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
              </svg>
              Delete task
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
