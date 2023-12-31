import React from "react";
import useFetch from "../hooks/useFetch";
import BookCard from "./BookCard";
import { useLocation } from "react-router-dom";

const BookList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get("search");

  const {
    data: books,
    loading,
    error,
  } = useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ""}`);

  if (error) {
    return (
      <div className="text-center">
        <h1 className="text-red-600 text-xl font-bold">
          Oops! Something went wrong!
        </h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        role="status"
        className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
      >
        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

        <div className="flex flex-wrap items-center mt-4">
          {[1, 2, 3].map((index) => (
            <span
              key={index}
              className="rounded-full bg-gray-200 dark:bg-gray-700 m-1 h-5 w-20 px-3 py-1 align-middle"
            ></span>
          ))}
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {books?.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
      {!books?.length && (
        <p className="text-center text-3xl">No search result found!</p>
      )}
    </>
  );
};

export default BookList;
