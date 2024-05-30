import { MagnifyingGlass } from "@phosphor-icons/react";

function SearchBar() {
  return (
    <div className="flex rounded-full border-2 border-stone-300">
      <input
        type="text"
        placeholder="Search books, author, genre..."
        className=" w-60 rounded-l-full px-4 py-1 placeholder:text-sm  focus:outline-sky-500"
      />
      <button
        className="cursor-pointer rounded-r-full bg-white px-3 py-1 text-stone-400"
        aria-label="Search"
      >
        <MagnifyingGlass size={20} weight="bold" />
      </button>
    </div>
  );
}

export default SearchBar;
