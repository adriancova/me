import ToDo from "../islands/ToDo.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto relative">
      <div class="flex absolute left-4 top-0 items-center">
        <img
          class="my-6"
          src="/logo-transparent.png"
          width="128"
          height="128"
          alt="A logo"
        />
        <h1 class="text-4xl font-bold text-white">Howdy!</h1>
      </div>

      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center mt-24">
        <h2 class="text-white text-2xl font-bold">
          Welcome to my website.
        </h2>
        <ToDo />
      </div>
    </div>
  );
}
