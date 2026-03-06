import { useState } from 'react'
import { useApp } from '../context/AppContext'

const PRIORITIES = [
  { key: 'low',      label: 'Low',      color: 'bg-emerald-50 text-emerald-700 ring-emerald-300' },
  { key: 'medium',   label: 'Medium',   color: 'bg-amber-50 text-amber-700 ring-amber-300' },
  { key: 'high',     label: 'High',     color: 'bg-orange-50 text-orange-700 ring-orange-300' },
  { key: 'critical', label: 'Critical', color: 'bg-red-50 text-red-700 ring-red-300' },
]

export default function AddTaskModal() {
  const { state, actions } = useApp()
  const { categories, activeCategory } = state

  const defaultCategory = activeCategory !== 'All' ? activeCategory : categories[0] || ''

  const [form, setForm] = useState({
    name: '',
    description: '',
    priority: 'medium',
    category: defaultCategory,
    deadline: '',
    recurrence: null,
  })

  function set(field, value) {
    setForm(f => ({ ...f, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim()) return
    actions.addTask(form)
    actions.closeAddModal()
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) actions.closeAddModal()
  }

  return (
    <div
      className="sheet-backdrop fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end"
      onClick={handleBackdropClick}
    >
      <div className="sheet-panel w-full bg-white rounded-t-3xl shadow-2xl max-h-[92vh] overflow-y-auto safe-bottom">
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        <div className="px-5 pb-6 pt-4">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900">New Task</h2>
            <button
              onClick={actions.closeAddModal}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                Task Name *
              </label>
              <input
                autoFocus
                value={form.name}
                onChange={e => set('name', e.target.value)}
                placeholder="What needs to be done?"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                Description
              </label>
              <textarea
                value={form.description}
                onChange={e => set('description', e.target.value)}
                placeholder="Add details (optional)"
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition resize-none"
              />
            </div>

            {/* Priority */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                Priority
              </label>
              <div className="grid grid-cols-4 gap-2">
                {PRIORITIES.map(p => (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => set('priority', p.key)}
                    className={`py-2.5 rounded-xl text-xs font-semibold border-2 transition-all duration-150 active:scale-95 ${
                      form.priority === p.key
                        ? `${p.color} ring-2 border-transparent`
                        : 'bg-white text-gray-400 border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => set('category', cat)}
                    className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-150 active:scale-95 ${
                      form.category === cat
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Deadline</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4 text-gray-400">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <input
                  type="date"
                  value={form.deadline}
                  onChange={e => set('deadline', e.target.value)}
                  className="w-full pl-9 pr-3 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-gray-700"
                />
              </div>
            </div>

            {/* Recurrence */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Recurrence</label>
              <div className="flex flex-wrap gap-2">
                {[null, 'daily', 'weekly', 'monthly', 'yearly'].map(v => (
                  <button
                    key={String(v)}
                    type="button"
                    onClick={() => set('recurrence', v)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-150 active:scale-95 ${
                      form.recurrence === v
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {v ? v.charAt(0).toUpperCase() + v.slice(1) : 'None'}
                  </button>
                ))}
              </div>
              {form.recurrence && !form.deadline && (
                <p className="text-xs text-amber-600 mt-1.5">Set a deadline so next occurrence auto-schedules.</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-semibold rounded-xl shadow-md shadow-indigo-200 transition-all duration-150 mt-1"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
