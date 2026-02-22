import { useState } from "react"

function AddTaskForm({ onNewTask }) {
  const [taskName, setTaskName] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const trimmed = taskName.trim()
    if (!trimmed) return

    onNewTask(trimmed)
    setTaskName("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3">
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="New task name"
        aria-label="New task name"
        className="w-96 rounded border border-gray-300 px-3 py-2 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 active:bg-blue-700"
      >
        Add task
      </button>
    </form>
  )
}

export default AddTaskForm