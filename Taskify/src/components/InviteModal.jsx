import { useState } from 'react'
import { useApp } from '../context/AppContext'

export default function InviteModal() {
  const { state, actions } = useApp()
  const { user } = state
  const [copied, setCopied] = useState(false)

  const inviteCode = user?.inviteCode || '------'
  // Placeholder invite link — real implementation will use a backend URL
  const inviteLink = `https://taskify.app/join/${inviteCode}`

  function handleCopy() {
    navigator.clipboard.writeText(inviteLink).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) actions.closeInviteModal()
  }

  return (
    <div
      className="sheet-backdrop fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end"
      onClick={handleBackdropClick}
    >
      <div className="sheet-panel w-full bg-white rounded-t-3xl shadow-2xl safe-bottom">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        <div className="px-5 pb-8 pt-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Invite Collaborators</h2>
            <button
              onClick={actions.closeInviteModal}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Illustration */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-indigo-500">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Share your invite link with teammates or family to collaborate on tasks together.
            </p>
          </div>

          {/* Invite code */}
          <div className="bg-gray-50 rounded-2xl p-4 mb-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Your Invite Code</p>
            <div className="flex items-center justify-between gap-3">
              <span className="text-2xl font-bold tracking-widest text-gray-800 font-mono">
                {inviteCode}
              </span>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 active:scale-95 ${
                  copied
                    ? 'bg-emerald-500 text-white'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {copied ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
                      <rect x="9" y="9" width="13" height="13" rx="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    Copy Link
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Coming soon banner */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <div>
              <p className="text-sm font-semibold text-amber-700">Real-time collaboration coming soon</p>
              <p className="text-xs text-amber-600 mt-0.5 leading-relaxed">
                Invite links will let others join your workspace and contribute tasks in real time. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
