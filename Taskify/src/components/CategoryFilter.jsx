import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { getCategoryColor } from '../utils/categoryColors'

export default function CategoryFilter() {
  const { state, actions } = useApp()
  const { categories, activeCategory, tasks, categoryColors } = state
  const [adding, setAdding] = useState(false)
  const [newCat, setNewCat] = useState('')

  const all = ['All', ...categories]

  function countFor(cat) {
    if (cat === 'All') return tasks.filter(t => !t.completed).length
    return tasks.filter(t => t.category === cat && !t.completed).length
  }

  function handleAdd() {
    const name = newCat.trim()
    if (name) {
      actions.addCategory(name)
      setNewCat('')
    }
    setAdding(false)
  }

  return (
    <div className="px-5 pb-2">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {all.map(cat => {
          const active = activeCategory === cat
          const count = countFor(cat)
          const clr = cat !== 'All' ? getCategoryColor(cat, categoryColors) : null

          return (
            <button
              key={cat}
              onClick={() => actions.setActiveCategory(cat)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-150 active:scale-95 flex-shrink-0 ${
                cat === 'All'
                  ? active
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  : active
                    ? `${clr.badge} ring-2 ${clr.ring} shadow-sm`
                    : `${clr.badge} opacity-60 hover:opacity-100`
              }`}
            >
              {cat}
              {count > 0 && (
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                  active && cat === 'All' ? 'bg-white/20 text-white' : 'bg-black/10'
                }`}>
                  {count}
                </span>
              )}
            </button>
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
    </div>
  )
}
