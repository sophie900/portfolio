export default function About() {
  return (
    <main className="w-full
      flex flex-col justify-center items-center
      mx-auto overflow-hidden
      px-10 md:px-20 lg:px-30 xl:px-40
      mt-20 mb-20"
    >
        <h1 className="text-5xl font-semibold text-zinc-800 dark:text-zinc-200">About Me</h1>
        <div className="grid grid-cols-2 gap-8 px-10 md:px-20 lg:px-30 py-10">
        <img src="/circle.svg" className="h-100 w-full object-cover col-span-2 lg:col-span-1 right-0 justify-self-center lg:justify-self-end"></img>
        <p className="col-span-2 lg:col-span-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
    </main>
  );
}
