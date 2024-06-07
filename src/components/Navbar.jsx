import { useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import { Bag, List } from "@phosphor-icons/react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  function toggleLinks() {
    setShowLinks(!showLinks);
  }

  return (
    <nav className="border-b-2 border-neutral-300 bg-neutral-200 shadow">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-medium text-neutral-500">
            <Link to="/">.bookstore</Link>
          </h1>
          <SearchBar />
          <button onClick={toggleLinks}>
            <List size={32} />
          </button>
        </div>
        {showLinks && (
          <div>
            <ul className="px-4 py-2 font-medium text-neutral-500">
              <li className="px-2 py-1 hover:rounded hover:bg-neutral-300 hover:px-3">
                <Link to="/books">Books</Link>
              </li>
              <li className="px-2 py-1 hover:rounded hover:bg-neutral-300 hover:px-3">
                <Link to="/about">About</Link>
              </li>
              <li className="px-2 py-1 hover:rounded hover:bg-neutral-300 hover:px-3">
                <Bag size={26} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
