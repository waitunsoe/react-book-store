import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BookDetail = () => {
  const { id } = useParams();
  const {
    data: book,
    loading,
    error,
  } = useFetch(`http://localhost:3000/books/${id}`);

  return <div>{book?.title}</div>;
};

export default BookDetail;
