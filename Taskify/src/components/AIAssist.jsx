import { useState } from 'react'
import { useApp } from '../context/AppContext'

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages'

function buildPrompt(tasks, username) {
  const activeTasks = tasks.filter(t => !t.completed)
  const today = new Date().toISOString().split('T')[0]

  const taskSummary = activeTasks.map(t => ({
    name: t.name,
    priority: t.priority,
    category: t.category,
    description: t.description || null,
    deadline: t.deadline || null,
    overdue: t.deadline && t.deadline < today,
  }))

  return `You are a personal productivity and wellbeing coach named Taskify AI. Analyze ${username}'s task list and give warm, actionable suggestions. Today is ${today}.

Tasks (${activeTasks.length} active):
${JSON.stringify(taskSummary, null, 2)}

Respond in this exact format (use the section headers exactly as shown):

**TODAY'S FOCUS**
List the top 3 tasks to work on today, with a one-line reason for each. Be specific — use the actual task names.

**PRIORITY ADJUSTMENTS**
Are any tasks misaligned in urgency vs. their current priority level? Suggest specific changes. If all looks good, say so briefly.

**WELLBEING CHECK**
Look at the balance across Family / Work / Wellbeing categories. Flag any imbalance, overdue personal care, or signs of overload. Be warm and human.

**EFFICIENCY TIPS**
1-2 practical suggestions: task batching, energy timing, or sequencing opportunities specific to this list.

Keep the entire response concise and friendly. Use the person's actual task names, not generic advice.`
}

// Parse the markdown-style response into sections
function parseSections(text) {
  const sections = []
  const lines = text.split('\n')
  let current = null

  for (const line of lines) {
    const header = line.match(/^\*\*(.+?)\*\*$/)
    if (header) {
      if (current) sections.push(current)
      current = { title: header[1], lines: [] }
    } else if (current && line.trim()) {
      current.lines.push(line.trim())
    }
  }
  if (current) sections.push(current)
  return sections
}

const SECTION_ICONS = {
  "TODAY'S FOCUS":       { icon: '🎯', bg: 'bg-indigo-50', border: 'border-indigo-100', title: 'text-indigo-700' },
  'PRIORITY ADJUSTMENTS':{ icon: '⚡', bg: 'bg-orange-50', border: 'border-orange-100', title: 'text-orange-700' },
  'WELLBEING CHECK':     { icon: '🌿', bg: 'bg-emerald-50', border: 'border-emerald-100', title: 'text-emerald-700' },
  'EFFICIENCY TIPS':     { icon: '💡', bg: 'bg-amber-50', border: 'border-amber-100', title: 'text-amber-700' },
}

export default function AIAssist() {
  const { state, actions } = useApp()
  const { tasks, apiKey, user } = state
  const [loading, setLoading] = useState(false)
  const [sections, setSections] = useState([])
  const [error, setError] = useState('')
  const [rawText, setRawText] = useState('')

  async function fetchSuggestions() {
    if (!apiKey) {
      setError('Add your Claude API key in Settings to use AI suggestions.')
      return
    }
    if (tasks.filter(t => !t.completed).length === 0) {
      setError('Add some tasks first so AI can analyze them.')
      return
    }

    setLoading(true)
    setError('')
    setSections([])
    setRawText('')

    try {
      const res = await fetch(ANTHROPIC_URL, {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 1200,
          messages: [{ role: 'user', content: buildPrompt(tasks, user?.username || 'there') }],
        }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        if (res.status === 401) throw new Error('Invalid API key. Check your key in Settings.')
        throw new Error(err?.error?.message || `API error ${res.status}`)
      }

      const data = await res.json()
      const text = data.content?.[0]?.text || ''
      setRawText(text)
      setSections(parseSections(text))
    } catch (e) {
      setError(e.message || 'Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) actions.closeAIAssist()
  }

  return (
    <div
      className="sheet-backdrop fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end"
      onClick={handleBackdropClick}
    >
      <div className="sheet-panel w-full bg-white rounded-t-3xl shadow-2xl max-h-[90vh] flex flex-col safe-bottom">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-3 pb-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                <path d="M12 2L13.09 8.26L19 6L15.45 11.09L21 13.27L15.09 13.91L16 20L12 15.27L8 20L8.91 13.91L3 13.27L8.55 11.09L5 6L10.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">AI Suggestions</h2>
              <p className="text-xs text-gray-400">Powered by Claude</p>
            </div>
          </div>
          <button
            onClick={actions.closeAIAssist}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 pb-6">
          {/* Generate button */}
          {!loading && sections.length === 0 && !error && (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-50 to-indigo-100 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-indigo-500">
                  <path d="M12 2L13.09 8.26L19 6L15.45 11.09L21 13.27L15.09 13.91L16 20L12 15.27L8 20L8.91 13.91L3 13.27L8.55 11.09L5 6L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Get personalized suggestions</p>
                <p className="text-sm text-gray-400 mt-1 max-w-xs">
                  Claude will analyze your tasks and suggest what to focus on for efficiency and wellbeing.
                </p>
              </div>
              {!apiKey && (
                <div className="flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-2xl p-3 text-left w-full">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <p className="text-xs text-amber-700">
                    You need a Claude API key. Add it in{' '}
                    <button onClick={() => { actions.closeAIAssist(); actions.openSettings() }} className="underline font-semibold">
                      Settings
                    </button>.
                  </p>
                </div>
              )}
              <button
                onClick={fetchSuggestions}
                disabled={!apiKey}
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-200 transition-all duration-150 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Analyze My Tasks
              </button>
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center py-12 gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-500 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
              </div>
              <p className="text-sm text-gray-500 font-medium">Analyzing your tasks...</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="flex flex-col gap-4">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-sm text-red-600">{error}</div>
              <button
                onClick={fetchSuggestions}
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl active:scale-95 transition-all"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Results */}
          {sections.length > 0 && (
            <div className="flex flex-col gap-4">
              {sections.map((section, i) => {
                const style = SECTION_ICONS[section.title] || { icon: '•', bg: 'bg-gray-50', border: 'border-gray-100', title: 'text-gray-700' }
                return (
                  <div key={i} className={`${style.bg} border ${style.border} rounded-2xl p-4`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-base">{style.icon}</span>
                      <h3 className={`text-xs font-bold uppercase tracking-wide ${style.title}`}>{section.title}</h3>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {section.lines.map((line, j) => (
                        <p key={j} className="text-sm text-gray-700 leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                )
              })}

              {/* Refresh */}
              <button
                onClick={fetchSuggestions}
                className="flex items-center justify-center gap-2 py-2.5 text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
                  <polyline points="23 4 23 10 17 10"/>
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
                </svg>
                Refresh suggestions
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
