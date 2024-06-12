import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/books/${query}`);
    setQuery(e.target.value);
  }

  return (
    <div className="mx-2 flex w-full rounded-full border-2 border-neutral-300 sm:order-none sm:ml-5 sm:mr-auto sm:w-72">
      <input
        type="search"
        value={query}
        placeholder="Search books, author, genre..."
        className="w-full rounded-l-full px-4 py-1 placeholder:text-sm sm:w-60"
        onChange={handleSubmit}
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
