import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Bag, Heart, List } from "@phosphor-icons/react";

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
      url: "/likes",
      icon: <Heart size={26} />,
    },
    {
      id: 4,
      url: "/cart",
      icon: <Bag size={26} />,
    },
  ];

  return (
    <nav className="border-b-2 border-neutral-300 bg-neutral-950 shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <h1 className="text-xl font-medium text-neutral-100 sm:text-2xl">
          <Link to="/">.bookstore</Link>
        </h1>
        <SearchBar />
        <ul className="-mr-6 hidden gap-2 px-4 py-2 font-medium text-neutral-100 lg:flex lg:items-center">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li
                key={id}
                className="px-2 py-1 hover:rounded hover:bg-neutral-800"
              >
                <NavLink
                  to={url}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded font-bold text-yellow-700"
                      : "hover:rounded hover:bg-neutral-800"
                  }
                >
                  {text || icon}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="px-2 py-3 text-neutral-100 transition-all hover:rotate-90 lg:hidden"
          onClick={toggleLinks}
        >
          <List size={26} />
        </button>
      </div>

      <div
        className={`fixed left-0 top-0 h-full w-[60%] bg-white bg-blend-darken shadow-xl transition-transform duration-500 ease-in-out sm:w-[40%] ${
          showLinks ? "translate-x-0" : "-translate-x-full "
        } border-r-2 border-neutral-100 lg:hidden`}
      >
        <ul className="px-4 py-10 font-medium text-neutral-500 sm:px-8 sm:py-20">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li
                key={id}
                className="px-2 py-2 transition-all hover:rounded hover:bg-rose-200 hover:px-3"
              >
                <NavLink className="block" to={url} onClick={toggleLinks}>
                  {text || icon}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
