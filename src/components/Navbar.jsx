import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Bag, List } from "@phosphor-icons/react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  function toggleLinks() {
    setShowLinks(!showLinks);
  }

  const links = [
    {
      id: 1,
      url: "/books",
      text: "Books",
    },
    {
      id: 2,
      url: "/about",
      text: "About",
    },
    {
      id: 3,
      url: "/",
      icon: <Bag size={26} />,
    },
  ];

  return (
    <nav className="border-b-2 border-neutral-300 bg-neutral-200 shadow">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-medium text-neutral-500">
            <Link to="/">.bookstore</Link>
          </h1>
          <SearchBar />
          <ul className="hidden px-4 py-2 font-medium text-neutral-500 lg:flex lg:items-center">
            {links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li
                  key={id}
                  className="px-2 py-1 hover:rounded hover:bg-neutral-300 hover:px-3"
                >
                  <Link to={url}>{text || icon}</Link>
                </li>
              );
            })}
          </ul>
          <button className="lg:hidden" onClick={toggleLinks}>
            <List size={32} />
          </button>
        </div>
        <div>
          {showLinks && (
            <ul className="px-4 py-2 font-medium text-neutral-500">
              {links.map((link) => {
                const { id, url, text, icon } = link;
                return (
                  <li
                    key={id}
                    className="px-2 py-1 hover:rounded hover:bg-neutral-300 hover:px-3"
                  >
                    <Link to={url}>{text || icon}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
