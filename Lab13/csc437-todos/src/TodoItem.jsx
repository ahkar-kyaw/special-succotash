import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ name, isComplete }) {
  return (
    <li className="flex items-center justify-normal gap-4">
      <label className="flex items-center gap-2 text-lg">
        <input
          type="checkbox"
          checked={isComplete}
          onChange={() => {}}
          onClick={(e) => e.preventDefault()}
          aria-label={`Mark ${name} complete`}
          className="h-4 w-4"
        />
        <span>{name}</span>
      </label>

      <button
        type="button"
        className="text-gray-500 hover:text-gray-600 active:text-gray-700"
        aria-label={`Delete ${name}`}
      >
        <FontAwesomeIcon icon={faTrashCan} title={`Delete ${name}`} />
      </button>
    </li>
  );
}

export default TodoItem;