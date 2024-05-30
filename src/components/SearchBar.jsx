import { MagnifyingGlass } from "@phosphor-icons/react";

function SearchBar() {
  return (
    <div className="order-last flex w-full rounded-full border-2 border-neutral-300 sm:order-none sm:w-72">
      <input
        type="text"
        placeholder="Search books, author, genre..."
        className=" w-full rounded-l-full px-4 py-1 placeholder:text-sm sm:w-60"
      />
      <button
        className="cursor-pointer rounded-r-full bg-white px-3 py-1 text-neutral-400"
        aria-label="Search"
      >
        <MagnifyingGlass size={20} weight="bold" />
      </button>
    </div>
  );
}

export default SearchBar;
