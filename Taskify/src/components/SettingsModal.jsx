import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { COLOR_PALETTE, COLOR_NAMES, getCategoryColor } from '../utils/categoryColors'
import { getUserDisplayName } from '../lib/supabase'

function CategoryRow({ cat, taskCount, categoryColors, onRename, onDelete, onColorChange }) {
  const [editing, setEditing]     = useState(false)
  const [confirming, setConfirming] = useState(false)
  const [pickingColor, setPickingColor] = useState(false)
  const [value, setValue]         = useState(cat)
  const clr = getCategoryColor(cat, categoryColors)

  function commitRename() {
    const trimmed = value.trim()
    if (trimmed && trimmed !== cat) onRename(cat, trimmed)
    else setValue(cat)
    setEditing(false)
  }

  function handleDeleteClick() {
    if (taskCount === 0) { onDelete(cat); return }
    setConfirming(true)
  }

  return (
    <div className="py-2.5 border-b border-gray-100 last:border-0">
      <div className="flex items-center gap-3">
        {/* Color dot — tap to open color picker */}
        <button
          onClick={() => { setPickingColor(v => !v); setConfirming(false) }}
          className={`w-3 h-3 rounded-full flex-shrink-0 ${clr.dot} ring-2 ring-offset-1 ring-transparent hover:ring-gray-300 transition-all`}
          title="Change color"
        />

        {editing ? (
          <input
            autoFocus
            value={value}
            onChange={e => setValue(e.target.value)}
            onBlur={commitRename}
            onKeyDown={e => {
              if (e.key === 'Enter') commitRename()
              if (e.key === 'Escape') { setValue(cat); setEditing(false) }
            }}
            className="flex-1 text-sm px-2 py-1 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
          />
        ) : (
          <span
            className="flex-1 text-sm text-gray-800 font-medium cursor-pointer hover:text-indigo-600 transition-colors"
            onClick={() => { setConfirming(false); setEditing(true) }}
          >
            {cat}
          </span>
        )}

        <span className="text-xs text-gray-400 flex-shrink-0">
          {taskCount} {taskCount === 1 ? 'task' : 'tasks'}
        </span>

        {!editing && !confirming && (
          <>
            {/* Rename */}
            <button
              onClick={() => { setConfirming(false); setEditing(true) }}
              className="text-gray-300 hover:text-indigo-500 transition-colors"
              title="Rename"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>

            {/* Delete */}
            <button
              onClick={handleDeleteClick}
              className="text-gray-300 hover:text-red-500 transition-colors"
              title="Delete category"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Color picker */}
      {pickingColor && (
        <div className="mt-2 ml-5 flex flex-wrap gap-2">
          {COLOR_NAMES.map(colorName => {
            const c = COLOR_PALETTE[colorName]
            return (
              <button
                key={colorName}
                onClick={() => { onColorChange(cat, colorName); setPickingColor(false) }}
                className={`w-7 h-7 rounded-full ${c.dot} transition-transform hover:scale-110 active:scale-95 ring-2 ring-offset-1 ${
                  getCategoryColor(cat, categoryColors).dot === c.dot ? 'ring-gray-500' : 'ring-transparent'
                }`}
                title={colorName}
              />
            )
          })}
        </div>
      )}

      {/* Inline delete confirmation */}
      {confirming && (
        <div className="mt-2 ml-5 bg-red-50 border border-red-100 rounded-xl px-3 py-2.5 flex items-center justify-between gap-3">
          <p className="text-xs text-red-700 leading-snug">
            {taskCount} {taskCount === 1 ? 'task' : 'tasks'} will be moved to another category.
          </p>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => setConfirming(false)}
              className="text-xs font-semibold text-gray-500 hover:text-gray-700 transition-colors px-2 py-1"
            >
              Cancel
            </button>
            <button
              onClick={() => { setConfirming(false); onDelete(cat) }}
              className="text-xs font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors px-2.5 py-1 rounded-lg active:scale-95"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function SettingsModal() {
  const { state, actions } = useApp()
  const { categories, tasks, categoryColors } = state
  const [keyInput, setKeyInput] = useState(state.apiKey)
  const [showKey, setShowKey]   = useState(false)
  const [saved, setSaved]       = useState(false)
  const [newCat, setNewCat]     = useState('')

  function handleSaveKey() {
    actions.setApiKey(keyInput.trim())
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  function handleAddCategory() {
    const name = newCat.trim()
    if (name) { actions.addCategory(name); setNewCat('') }
  }

  function taskCountFor(cat) {
    return tasks.filter(t => t.category === cat).length
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) actions.closeSettings()
  }

  return (
    <div
      className="sheet-backdrop fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end"
      onClick={handleBackdropClick}
    >
      <div className="sheet-panel w-full bg-white rounded-t-3xl shadow-2xl max-h-[90vh] overflow-y-auto safe-bottom">
        <div className="flex justify-center pt-3 pb-1 sticky top-0 bg-white">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        <div className="px-5 pb-8 pt-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Settings</h2>
            <button
              onClick={actions.closeSettings}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* ── Categories ── */}
          <div className="bg-gray-50 rounded-2xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4 text-indigo-500">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                <line x1="7" y1="7" x2="7.01" y2="7"/>
              </svg>
              <h3 className="text-sm font-semibold text-gray-700">Categories</h3>
              <span className="text-xs text-gray-400 ml-auto">Tap name to rename</span>
            </div>

            <div className="mb-3">
              {categories.map(cat => (
                <CategoryRow
                  key={cat}
                  cat={cat}
                  taskCount={taskCountFor(cat)}
                  categoryColors={categoryColors}
                  onRename={actions.renameCategory}
                  onDelete={actions.removeCategory}
                  onColorChange={actions.setCategoryColor}
                />
              ))}
            </div>

            {/* Add category */}
            <div className="flex gap-2 mt-2">
              <input
                value={newCat}
                onChange={e => setNewCat(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleAddCategory() }}
                placeholder="New category name..."
                className="flex-1 px-3 py-2 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
              />
              <button
                onClick={handleAddCategory}
                disabled={!newCat.trim()}
                className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-xl text-sm font-semibold transition-all active:scale-95"
              >
                Add
              </button>
            </div>
          </div>

          {/* ── Claude API Key ── */}
          <div className="bg-gray-50 rounded-2xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4 text-indigo-500">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
              </svg>
              <h3 className="text-sm font-semibold text-gray-700">Claude API Key</h3>
            </div>
            <p className="text-xs text-gray-400 mb-3">
              A key is built in. You can optionally override it with your own from console.anthropic.com.
            </p>
            <div className="relative mb-3">
              <input
                type={showKey ? 'text' : 'password'}
                value={keyInput}
                onChange={e => { setKeyInput(e.target.value); setSaved(false) }}
                placeholder="sk-ant-... (optional override)"
                className="w-full px-3 py-2.5 pr-10 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition font-mono"
              />
              <button type="button" onClick={() => setShowKey(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
                  {showKey
                    ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></>
                    : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>}
                </svg>
              </button>
            </div>
            <button
              onClick={handleSaveKey}
              className={`w-full py-2.5 font-semibold rounded-xl text-sm transition-all duration-150 active:scale-95 ${saved ? 'bg-emerald-500 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
            >
              {saved ? 'Saved!' : 'Save Override Key'}
            </button>
          </div>

          {/* ── Account ── */}
          <div className="bg-gray-50 rounded-2xl p-4 mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Account</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-800 font-medium">{getUserDisplayName(state.user)}</p>
                <p className="text-xs text-gray-400">{state.user?.email}</p>
              </div>
              <button
                onClick={() => { actions.closeSettings(); actions.logout() }}
                className="text-sm text-red-500 font-medium hover:text-red-700 transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400">Your data syncs across all your devices.</p>
        </div>
      </div>
    </div>
  )
}
