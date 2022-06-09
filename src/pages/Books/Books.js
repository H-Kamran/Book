import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Books.css";
import Book from "../../components/Book/Book.js";

export default function Books() {
  const params = useParams();
  const q = params.q;
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${q}&maxResults=20`
    )
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items);
        // console.log(data);
      });
  }, [q]);
  if (books === null) {
    return null;
  }
  return (
    <div className="books">
      {books.map((item) => (
        <Book book={item} />
      ))}
    </div>
  );
}
