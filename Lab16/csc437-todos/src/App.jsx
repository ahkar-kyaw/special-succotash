import { useState } from "react"
import { nanoid } from "nanoid"
import AddTaskForm from "./AddTaskForm.jsx"
import TodoItem from "./TodoItem.jsx"
import Modal from "./Modal.jsx"

const MY_INITIAL_TASK_LIST = [
  { id: "todo-0", name: "Eat", isComplete: true },
  { id: "todo-1", name: "Sleep", isComplete: false },
  { id: "todo-2", name: "Repeat", isComplete: false },
]

function App() {
  const [taskList, setTaskList] = useState(MY_INITIAL_TASK_LIST)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  function addTask(name) {
    const newTask = { id: nanoid(), name, isComplete: false }
    setTaskList([...taskList, newTask])
    setIsAddModalOpen(false)
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = taskList.map((task) => {
      if (id === task.id) return { ...task, isComplete: !task.isComplete }
      return task
    })
    setTaskList(updatedTasks)
  }

  function deleteTask(id) {
    const updatedTasks = taskList.filter((task) => task.id !== id)
    setTaskList(updatedTasks)
  }

  return (
    <main className="m-4">
      <button
        type="button"
        onClick={() => setIsAddModalOpen(true)}
        className="mb-3 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 active:bg-blue-700"
      >
        New Task
      </button>

      <h1 className="text-xl font-bold">To do</h1>

      <ul className="mt-3 space-y-3">
        {taskList.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            name={task.name}
            isComplete={task.isComplete}
            onToggleCompleted={toggleTaskCompleted}
            onDelete={deleteTask}
          />
        ))}
      </ul>

      <Modal
        headerLabel="New Task"
        isOpen={isAddModalOpen}
        onCloseRequested={() => setIsAddModalOpen(false)}
      >
        <AddTaskForm onNewTask={addTask} />
      </Modal>
    </main>
  )
}

export default App