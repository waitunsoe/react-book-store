import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleSearch = () => {
    navigate(`/?search=${search}`);
  };

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-slate-800 text-white" : "bg-slate-100"
      } shadow border-b`}
    >
      <ul className="flex justify-between gap-3 items-center py-3 px-1 md:p-3 max-w-6xl mx-auto">
        <li>
          <Link to={"/"} className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
              />
            </svg>

            <span className="text-2xl font-bold text-primary hidden md:block">
              Books Store
            </span>
          </Link>
        </li>
        <li className="flex items-center gap-1 md:gap-3 bg-slate-300 h-10 p-2 pe-0  rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="search books..."
            className=" bg-transparent outline-none block"
          />
          <button
            onClick={handleSearch}
            className="border flex items-center  border-primary bg-primary text-white rounded px-3 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </li>
        <li className="flex items-center gap-3 md:gap-5">
          <Link
            to="/create"
            className="border flex items-center gap-2 border-primary hover:bg-primary hover:text-white rounded px-3 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="hidden md:block">Create</span>
          </Link>
          <div className="w-14 h-14 bg-slate-400 rounded-full p-1 cursor-pointer">
            <img
              src="https://img.favpng.com/13/20/15/lisa-blackpink-video-image-square-up-png-favpng-FSuH8sBtpbdYeUWXvypbYRe3n.jpg"
              className="w-full h-full rounded-full hover:scale-95"
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
