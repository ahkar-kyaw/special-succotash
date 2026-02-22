import AddTaskForm from "./AddTaskForm.jsx";
import TodoItem from "./TodoItem.jsx";

function App() {
  return (
    <main className="m-4">
      <AddTaskForm />

      <section className="mt-6">
        <h1 className="text-xl font-bold">To do</h1>
        <ul className="mt-3 space-y-3">
          <TodoItem name="Eat" isComplete={true} />
          <TodoItem name="Sleep" isComplete={false} />
          <TodoItem name="Repeat" isComplete={false} />
        </ul>
      </section>
    </main>
  );
}

export default App;