import { useEffect, useState } from "react";
import BookItem from "../components/BookItem";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  // const [selectedBook, onSelectedBook] = useState(null);

  useEffect(() => {
    async function getBooks() {
      try {
        const response = await fetch("http://localhost:8000/books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    }
    getBooks();
  }, []);
  return (
    <div className="container mx-auto px-4 pb-32">
      <h3 className="py-20 text-center text-xl font-medium">Books</h3>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {books.map((book) => (
          <>
            <Link to="/books/:id">
              {" "}
              <BookItem key={book.id} book={book} />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

export default Books;
