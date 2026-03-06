import { useApp } from '../context/AppContext'
import { getUserDisplayName } from '../lib/supabase'

export default function Header() {
  const { state, actions } = useApp()
  const { user } = state

  const displayName = getUserDisplayName(user)
  const initials = displayName.slice(0, 2).toUpperCase()

  return (
    <div className="flex items-center justify-between px-5 pt-5 pb-3">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Taskify</h1>
        <p className="text-sm text-gray-400 mt-0.5">Hi, {displayName}</p>
      </div>

      <div className="flex items-center gap-2">
        {/* AI Assist */}
        <button
          onClick={actions.openAIAssist}
          className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-violet-50 to-indigo-50 hover:from-violet-100 hover:to-indigo-100 active:scale-95 text-indigo-600 rounded-xl text-sm font-medium transition-all duration-150"
          title="AI suggestions"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 2L13.09 8.26L19 6L15.45 11.09L21 13.27L15.09 13.91L16 20L12 15.27L8 20L8.91 13.91L3 13.27L8.55 11.09L5 6L10.91 8.26L12 2Z"/>
          </svg>
          AI
        </button>

        {/* Invite */}
        <button
          onClick={actions.openInviteModal}
          className="flex items-center gap-1.5 px-3 py-2 bg-indigo-50 hover:bg-indigo-100 active:scale-95 text-indigo-600 rounded-xl text-sm font-medium transition-all duration-150"
          title="Invite collaborators"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <line x1="19" y1="8" x2="19" y2="14"/>
            <line x1="22" y1="11" x2="16" y2="11"/>
          </svg>
          Invite
        </button>

        {/* Settings / Avatar */}
        <button
          onClick={actions.openSettings}
          className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow-sm active:scale-95 transition-all duration-150"
          title="Settings"
        >
          {initials}
        </button>
      </div>
    </div>
  )
}
