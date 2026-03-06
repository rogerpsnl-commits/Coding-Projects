import { AppProvider, useApp } from './context/AppContext'
import Login from './components/Login'
import Header from './components/Header'
import CategoryFilter from './components/CategoryFilter'
import TaskBoard from './components/TaskBoard'
import AddTaskModal from './components/AddTaskModal'
import InviteModal from './components/InviteModal'
import AIAssist from './components/AIAssist'
import SettingsModal from './components/SettingsModal'

function AppShell() {
  const { state, actions } = useApp()
  const { user, loading, showAddModal, showInviteModal, showAIAssist, showSettings } = state

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center animate-pulse">
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M5 12.5 L9.5 17 L19 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="text-sm text-gray-400 font-medium">Loading…</p>
      </div>
    </div>
  )

  if (!user) return <Login />

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 max-w-lg mx-auto">
      {/* Status bar spacer for iOS */}
      <div className="safe-top bg-gray-50" />

      <Header />
      <CategoryFilter />

      {/* Task list */}
      <TaskBoard />

      {/* Floating Add Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 max-w-lg w-full px-5 flex justify-end pointer-events-none safe-bottom">
        <button
          onClick={actions.openAddModal}
          className="pointer-events-auto flex items-center gap-2 px-5 py-3.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold rounded-2xl shadow-xl shadow-indigo-300 transition-all duration-150"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-5 h-5">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Add Task
        </button>
      </div>

      {showAddModal    && <AddTaskModal />}
      {showInviteModal && <InviteModal />}
      {showAIAssist    && <AIAssist />}
      {showSettings    && <SettingsModal />}
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  )
}
