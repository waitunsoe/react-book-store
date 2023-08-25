import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Book from "../assets/everybody-lies.jpg";

const BookDetail = () => {
  const { id } = useParams();
  const {
    data: book,
    loading,
    error,
  } = useFetch(`http://localhost:3000/books/${id}`);

  return (
    <>
      {error && (
        <div className="text-center">
          <h1 className="text-red-600 text-xl font-bold">
            Oops! Something went wrong!
          </h1>
        </div>
      )}
      {loading && (
        <div
          role="status"
          class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex"
        >
          <div class="flex items-center justify-center w-full h-80 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              class="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div class="w-full">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="flex flex-wrap items-center mt-4">
              {book?.categories.map((index) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-200 dark:bg-gray-700 m-1 h-5 w-20 px-3 py-1 align-middle"
                ></span>
              ))}
            </div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      )}
      {book && (
        <div className="space-y-8 md:space-y-0 md:space-x-8 md:flex">
          <div className="w-full sm:w-64 h-80">
            <img src={Book} className="w-full object-fit h-full" />
          </div>
          <div className=" space-y-3">
            <h3 className=" text-2xl text-blue-500 font-bold">{book.title}</h3>
            <p className=" line-clamp-2">{book.description}</p>
            <div className="flex flex-wrap items-center">
              {book.categories.map((category, index) => (
                <span
                  key={index}
                  className="rounded-full bg-indigo-500 m-1 px-3 py-1 align-middle text-white text-xs"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetail;
