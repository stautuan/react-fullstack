import { Bag } from "@phosphor-icons/react";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav className="bg-stone-200">
      <div className="container mx-auto flex items-center justify-between  px-2.5 py-4">
        <div>
          <h1 className="text-2xl font-medium text-stone-500">Bookstore.</h1>
        </div>
        <SearchBar />
        <ul className="-mr-2 flex items-center gap-x-5 font-medium text-stone-400">
          <li className="px-2 py-1">Books</li>
          <li className="px-2 py-1">About</li>
          <li className="px-2 py-1">
            <Bag size={26} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
