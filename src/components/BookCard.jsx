import React from "react";
import Book from "../assets/everybody-lies.jpg";
import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const BookCard = (props) => {
  const { id, title, description, categories } = props;
  const { isDark } = useTheme();

  return (
    <div
      className={`max-w-xs w-full mx-auto border  shadow p-2 space-y-2 group  rounded-md  text-center ${
        isDark
          ? "bg-slate-600 border-slate-600 hover:border-slate-500"
          : "bg-indigo-100 border-indigo-200 hover:border-indigo-400"
      }`}
    >
      <div className="overflow-hidden duration-300 rounded-sm h-60">
        <img
          src={Book}
          className="object-contain group-hover:scale-105 duration-300 h-full w-full"
        />
      </div>
      <Link to={`books/${id}`}>
        <h3 className=" text-lg text-blue-500 font-bold group-hover:text-primary">
          {title}
        </h3>
      </Link>
      <p className=" line-clamp-2">{description}</p>
      <div className="flex flex-wrap items-center">
        {categories.map((category, index) => (
          <span
            key={index}
            className="rounded-full bg-indigo-500 m-1 px-3 py-1 align-middle text-white text-xs"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
