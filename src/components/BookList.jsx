import { useEffect, useState } from "react";
import BookItem from "./BookItem";
import { Link } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    async function getBooks() {
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
    getBooks();
  }, []);

  return (
    <section>
      <div className="container mx-auto px-4 pb-32">
        <div>
          <h3 className="py-20 text-center text-xl font-medium">
            Featured Books
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {books.map((book) => (
            <>
              <Link to="/books/:id">
                {" "}
                <BookItem
                  key={book.id}
                  book={book}
                  selectedBook={selectedBook}
                  onSelectedBook={setSelectedBook}
                />
              </Link>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookList;
