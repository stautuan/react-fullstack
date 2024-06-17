import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import BookItem from "./BookItem";
import { getFeaturedBooks } from "../utils";

function BookList() {
  const featuredBooks = useLoaderData();
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="container mx-auto px-4 pb-32">
      <h3 className="py-20 text-center text-xl font-medium">Featured Books</h3>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {featuredBooks.map((book) => (
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

export async function loader() {
  const featuredBooks = await getFeaturedBooks();
  return featuredBooks;
}

export default BookList;
