function AddTaskForm() {
  return (
    <div className="flex items-center gap-3">
      <input
        placeholder="New task name"
        aria-label="New task name"
        className="w-96 rounded border border-gray-300 px-3 py-2 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 active:bg-blue-700"
      >
        Add task
      </button>
    </div>
  );
}

export default AddTaskForm;