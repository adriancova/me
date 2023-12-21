import { useSignal } from "@preact/signals";
import TrashIcon from "$icons/trash.tsx";
import DoneIcon from "$icons/circle-check.tsx";

const done = [
  "Set up a Domain",
];
const myTasks = [
  "Portfolio",
  "Blog",
  "About me",
  "Contact",
  "Fruit game",
];

const ToDo = () => {
  const todos = useSignal(myTasks);
  const error = useSignal("");
  const moreToDo = useSignal("");

  const handleInput = (e: Event) => {
    error.value = "";
    moreToDo.value = (e.target as HTMLInputElement).value;
  };

  const handleDelete = (index: number) => {
    const remaining = [...todos.value].filter((_, idx) => idx !== index);
    todos.value = remaining;
  };

  const handleAdd = (e: Event) => {
    e.preventDefault();
    if (moreToDo.value === "") {
      error.value = "If the task is empty is it really a task?";
      return;
    }
    error.value = "";
    todos.value = [...todos.value, moreToDo.value];
    moreToDo.value = "";
  };
  return (
    <>
      <h3 class="text-xl font-bold text-white mt-8">TODO:</h3>
      <ul class="list-disc text-center my-4 ">
        {done.map((item) => (
          <li class="relative w-48 text-left my-2 line-through">
            {item}
            <DoneIcon
              class="absolute right-0 top-0"
              color="#10b981"
            />
          </li>
        ))}
        {todos.value.map((item, idx) => (
          <li class="relative w-48 text-left my-2">
            {item}
            <TrashIcon
              class="absolute right-0 top-0 cursor-pointer"
              color="#f87171"
              onClick={() => handleDelete(idx)}
            />
          </li>
        ))}
      </ul>

      <form class="text-white flex flex-col items-center" onSubmit={handleAdd}>
        <div>
          <input
            class="input input-primary"
            placeholder="One more thing to do..."
            value={moreToDo}
            onInput={handleInput}
          />
          <button type="submit" class="btn btn-primary ml-2">
            Add
          </button>
        </div>
        {error.value && <p class="text-red-500 text-sm mt-2">{error.value}</p>}
      </form>
    </>
  );
};
export default ToDo;
