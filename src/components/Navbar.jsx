import { Bag, List } from "@phosphor-icons/react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b-2 border-neutral-300 bg-neutral-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4 sm:flex-nowrap">
        <div>
          <h1 className="text-2xl font-medium text-neutral-500">
            <Link to="/">bookstore.</Link>
          </h1>
        </div>
        <SearchBar />
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
        <button className="lg:hidden" type="button">
          <List size={26} weight="bold" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
