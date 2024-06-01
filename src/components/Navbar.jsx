import { Bag, List } from "@phosphor-icons/react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav className="sticky top-0 border-b-2 border-neutral-300 bg-neutral-200 shadow">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4 sm:flex-nowrap">
        <h1 className="text-2xl font-medium text-neutral-500">
          <Link to="/">bookstore.</Link>
        </h1>
        <SearchBar />
        <button
          className="lg:hidden"
          type="button"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <List size={26} weight="bold" />
        </button>
        <ul className="-mr-2 hidden font-medium text-neutral-500 lg:flex lg:items-center lg:gap-x-5">
          <li className="px-2 py-1">
            <Link to="/books">Books</Link>
          </li>
          <li className="px-2 py-1">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 py-1">
            <Bag size={26} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
