import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass } from "@phosphor-icons/react";

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
    <div className="order-last flex w-full rounded border-2 border-white bg-white md:order-none md:ml-5 md:mr-auto md:w-fit">
      <input
        type="search"
        value={query}
        placeholder="Search books, author, genre..."
        className="w-full rounded-l px-4 py-1 placeholder:text-sm md:w-96"
        onChange={handleSubmit}
      />
      <button
        className="cursor-pointer rounded-r bg-white px-3 py-1 text-neutral-400"
        aria-label="Search"
      >
        <MagnifyingGlass size={20} weight="bold" />
      </button>
    </div>
  );
}

export default SearchBar;
