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
  const moreToDo = useSignal("");

  const handleChange = (e: Event) => {
    moreToDo.value = (e.target as HTMLInputElement).value;
  };

  const handleDelete = (index: number) => {
    const remaining = [...todos.value].filter((_, idx) => idx !== index);
    todos.value = remaining;
  };

  const handleAdd = (e: Event) => {
    e.preventDefault();
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

      <form class="text-white flex" onSubmit={handleAdd}>
        <input
          class="input input-primary"
          placeholder="One more thing to do..."
          value={moreToDo}
          onChange={handleChange}
        />
        <button type="submit" class="btn btn-primary ml-2">
          Add
        </button>
      </form>
    </>
  );
};
export default ToDo;
