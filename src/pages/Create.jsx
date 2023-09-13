import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch.js";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const { setPostData, data: book } = useFetch(
    "http://localhost:3000/books",
    "POST"
  );
  const navigate = useNavigate();

  const addCategory = () => {
    setCategories((prevState) => [...prevState, newCategory]);
    setNewCategory("");
  };

  const addBook = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      description,
      categories,
    };

    setPostData(newBook);
  };

  useEffect(() => {
    if (book) {
      navigate("/");
    }
  }, [book]);

  return (
    <div className="w-full max-w-xl mx-auto">
      <form
        onSubmit={addBook}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Categories
          </label>
          <div className="flex gap-3 items-center">
            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200  focus:border-gray-200"
              type="text"
              placeholder="categories"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type={"button"}
              onClick={addCategory}
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
            </button>
          </div>
          <div className="flex flex-wrap items-center mt-2">
            {categories.map((category, index) => (
              <span
                key={index}
                className="rounded-full bg-blue-500 m-1 px-3 py-1 align-middle text-white text-xs"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200  focus:border-gray-200"
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-200"
            placeholder="Description"
            rows={5}
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Create Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
