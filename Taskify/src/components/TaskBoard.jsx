import {
  DndContext,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  closestCenter,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { useState } from 'react'
import { useApp } from '../context/AppContext'
import TaskCard from './TaskCard'
import SortableTaskCard from './SortableTaskCard'

const PRIORITY_RANK = { critical: 0, high: 1, medium: 2, low: 3 }
const TODAY = () => new Date().toISOString().split('T')[0]

function sortByPriority(tasks) {
  return [...tasks].sort(
    (a, b) => PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority] || (a.sortOrder ?? 0) - (b.sortOrder ?? 0)
  )
}

// New rule: the dropped task joins the priority zone of the task BELOW it.
// This means reordering within the same zone is free (no priority change),
// and crossing a zone boundary naturally promotes/demotes priority.
// If dropped at the very bottom (no task below), inherit priority from above.
function inferPriority(movedList, droppedAtIndex) {
  const below = movedList[droppedAtIndex + 1]
  if (below) return below.priority
  const above = movedList[droppedAtIndex - 1]
  if (above) return above.priority
  return movedList[droppedAtIndex]?.priority ?? 'medium'
}

export default function TaskBoard() {
  const { state, actions } = useApp()
  const { tasks, activeCategory } = state
  const [activeId, setActiveId] = useState(null)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 8 } }),
  )

  const today = TODAY()

  const visibleTasks = activeCategory === 'All'
    ? tasks
    : tasks.filter(t => t.category === activeCategory)

  // Active: not completed, deadline not passed (or no deadline)
  const activeTasks   = sortByPriority(visibleTasks.filter(t => !t.completed && (!t.deadline || t.deadline >= today)))
  // Archived: not completed, deadline passed
  const archivedTasks = visibleTasks.filter(t => !t.completed && t.deadline && t.deadline < today)
  // Completed
  const completedTasks = visibleTasks.filter(t => t.completed)

  const activeTask = activeId ? tasks.find(t => t.id === activeId) : null

  function handleDragStart({ active }) {
    setActiveId(active.id)
  }

  function handleDragEnd({ active, over }) {
    setActiveId(null)
    if (!over || active.id === over.id) return

    const oldIndex = activeTasks.findIndex(t => t.id === active.id)
    const newIndex  = activeTasks.findIndex(t => t.id === over.id)
    if (oldIndex === -1 || newIndex === -1) return

    const moved = arrayMove(activeTasks, oldIndex, newIndex)
    const newPriority = inferPriority(moved, newIndex)

    const reordered = moved.map((t, i) => ({
      ...t,
      sortOrder: i,
      priority: t.id === active.id ? newPriority : t.priority,
    }))

    if (activeCategory === 'All') {
      actions.reorderTasks([...reordered, ...archivedTasks, ...completedTasks])
    } else {
      const reorderedMap = new Map(reordered.map(t => [t.id, t]))
      let catIdx = 0
      const newFull = tasks.map(t => {
        if (t.completed || t.category !== activeCategory || (t.deadline && t.deadline < today)) return t
        const updated = reorderedMap.get(activeTasks[catIdx]?.id)
        catIdx++
        return updated ?? t
      })
      actions.reorderTasks(newFull)
    }
  }

  const emptyMessage = activeCategory === 'All'
    ? 'No tasks yet. Tap + to add your first one!'
    : `No ${activeCategory} tasks. Tap + to add one.`

  return (
    <div className="flex-1 overflow-y-auto px-5 pb-32">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {/* ── Active tasks ── */}
        <SortableContext items={activeTasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
          <div className="flex flex-col gap-2.5 mt-2">
            {activeTasks.length === 0 && archivedTasks.length === 0 ? (
              <button
                onClick={actions.openAddModal}
                className="flex flex-col items-center justify-center py-16 text-center w-full group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-100 group-hover:bg-indigo-50 flex items-center justify-center mb-4 transition-colors duration-150">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gray-400 group-hover:text-indigo-400 transition-colors duration-150">
                    <rect x="3" y="3" width="18" height="18" rx="3"/>
                    <path d="M8 12h8M12 8v8"/>
                  </svg>
                </div>
                <p className="text-gray-400 group-hover:text-indigo-500 text-sm font-medium transition-colors duration-150">{emptyMessage}</p>
              </button>
            ) : (
              activeTasks.map(task => <SortableTaskCard key={task.id} task={task} />)
            )}
          </div>
        </SortableContext>

        <DragOverlay>
          {activeTask ? (
            <div className="dragging-card rounded-2xl">
              <TaskCard task={activeTask} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      {/* ── Archived (overdue) tasks ── */}
      {archivedTasks.length > 0 && <ArchivedSection tasks={archivedTasks} />}

      {/* ── Completed tasks ── */}
      {completedTasks.length > 0 && <CompletedSection tasks={completedTasks} />}
    </div>
  )
}

function ArchivedSection({ tasks }) {
  const [open, setOpen] = useState(true) // open by default to surface overdue items

  return (
    <div className="mt-5">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 text-sm text-red-400 font-semibold mb-3 hover:text-red-600 transition-colors"
      >
        <svg
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
        >
          <polyline points="9 18 15 12 9 6"/>
        </svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
          <polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/>
          <line x1="10" y1="12" x2="14" y2="12"/>
        </svg>
        Archive — Overdue ({tasks.length})
      </button>

      {open && (
        <>
          <p className="text-xs text-gray-400 mb-3 -mt-1">
            These tasks missed their deadline. Expand any card to update the deadline and restore it.
          </p>
          <div className="flex flex-col gap-2.5">
            {tasks.map(task => <TaskCard key={task.id} task={task} />)}
          </div>
        </>
      )}
    </div>
  )
}

function CompletedSection({ tasks }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-5">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 text-sm text-gray-400 font-medium mb-3 hover:text-gray-600 transition-colors"
      >
        <svg
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
        >
          <polyline points="9 18 15 12 9 6"/>
        </svg>
        Completed ({tasks.length})
      </button>
      {open && (
        <div className="flex flex-col gap-2.5">
          {tasks.map(task => <TaskCard key={task.id} task={task} />)}
        </div>
      )}
    </div>
  )
}
