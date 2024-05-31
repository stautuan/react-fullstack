import { useEffect, useState } from "react";
import BookItem from "./BookItem";

function BookList() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    async function getFeaturedBooks() {
      try {
        const response = await fetch(
          "http://localhost:8000/books?_start=0&_limit=4",
        );
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    }
    getFeaturedBooks();
  }, []);

  return (
    <div className="container mx-auto  px-4 pb-32">
      <h3 className="py-20 text-center text-xl font-medium">Featured Books</h3>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            selectedBook={selectedBook}
            onSelectedBook={setSelectedBook}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;
