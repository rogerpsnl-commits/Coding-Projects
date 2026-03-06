import { useState, useRef } from 'react'
import { useApp } from '../context/AppContext'
import { getCategoryColor } from '../utils/categoryColors'

export default function CategoryFilter() {
  const { state, actions } = useApp()
  const { categories, activeCategory, tasks, categoryColors } = state
  const [adding, setAdding] = useState(false)
  const [newCat, setNewCat] = useState('')
  const [deletingCat, setDeletingCat] = useState(null)
  const [confirmingCat, setConfirmingCat] = useState(null)
  const longPressTimer = useRef(null)
  const suppressClick = useRef(false)

  const all = ['All', ...categories]

  function countFor(cat) {
    if (cat === 'All') return tasks.filter(t => !t.completed).length
    return tasks.filter(t => t.category === cat && !t.completed).length
  }

  function taskCountFor(cat) {
    return tasks.filter(t => t.category === cat).length
  }

  function handleAdd() {
    const name = newCat.trim()
    if (name) {
      actions.addCategory(name)
      setNewCat('')
    }
    setAdding(false)
  }

  function startLongPress(cat) {
    longPressTimer.current = setTimeout(() => {
      suppressClick.current = true
      setDeletingCat(cat)
      setConfirmingCat(null)
    }, 500)
  }

  function cancelLongPress() {
    clearTimeout(longPressTimer.current)
  }

  function handleChipClick(cat) {
    if (suppressClick.current) { suppressClick.current = false; return }
    if (deletingCat) { setDeletingCat(null); setConfirmingCat(null); return }
    actions.setActiveCategory(cat)
  }

  function handleDeleteClick(e, cat) {
    e.stopPropagation()
    if (taskCountFor(cat) === 0) {
      actions.removeCategory(cat)
      setDeletingCat(null)
    } else {
      setConfirmingCat(cat)
    }
  }

  function confirmDelete(cat) {
    actions.removeCategory(cat)
    setDeletingCat(null)
    setConfirmingCat(null)
  }

  return (
    <div className="px-5 pb-2">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
        {all.map(cat => {
          const active = activeCategory === cat
          const count = countFor(cat)
          const clr = cat !== 'All' ? getCategoryColor(cat, categoryColors) : null
          const isDeleting = deletingCat === cat

          return (
            <div key={cat} className="relative flex-shrink-0">
              <button
                onClick={() => handleChipClick(cat)}
                onMouseDown={() => cat !== 'All' && startLongPress(cat)}
                onMouseUp={cancelLongPress}
                onMouseLeave={cancelLongPress}
                onTouchStart={() => cat !== 'All' && startLongPress(cat)}
                onTouchEnd={cancelLongPress}
                className={`flex items-center gap-1.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-150 active:scale-95 ${
                  isDeleting ? 'pl-3.5 pr-7' : 'px-3.5'
                } ${
                  isDeleting
                    ? `${clr.badge} ring-2 ring-red-400`
                    : cat === 'All'
                      ? active
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      : active
                        ? `${clr.badge} ring-2 ${clr.ring} shadow-sm`
                        : `${clr.badge} opacity-60 hover:opacity-100`
                }`}
              >
                {cat}
                {!isDeleting && count > 0 && (
                  <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                    active && cat === 'All' ? 'bg-white/20 text-white' : 'bg-black/10'
                  }`}>
                    {count}
                  </span>
                )}
              </button>
              {isDeleting && (
                <button
                  onClick={e => handleDeleteClick(e, cat)}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="w-2.5 h-2.5">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              )}
            </div>
          )
        })}

        {/* Add category */}
        {adding ? (
          <div className="flex items-center gap-1 flex-shrink-0">
            <input
              autoFocus
              value={newCat}
              onChange={e => setNewCat(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleAdd(); if (e.key === 'Escape') setAdding(false) }}
              onBlur={handleAdd}
              placeholder="Category name"
              className="w-32 px-3 py-1.5 text-sm border border-indigo-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
            />
          </div>
        ) : (
          <button
            onClick={() => setAdding(true)}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 active:scale-95 flex items-center justify-center text-gray-500 transition-all"
            title="Add category"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
        )}
      </div>

      {confirmingCat && (
        <div className="mt-1.5 bg-red-50 border border-red-100 rounded-xl px-3 py-2 flex items-center justify-between gap-3">
          <p className="text-xs text-red-700 leading-snug">
            Delete "{confirmingCat}"? Tasks will move to another category.
          </p>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => { setConfirmingCat(null); setDeletingCat(null) }}
              className="text-xs font-semibold text-gray-500 hover:text-gray-700 px-2 py-1"
            >
              Cancel
            </button>
            <button
              onClick={() => confirmDelete(confirmingCat)}
              className="text-xs font-semibold text-white bg-red-500 hover:bg-red-600 px-2.5 py-1 rounded-lg active:scale-95 transition-all"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
