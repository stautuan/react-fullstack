import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import BookItem from "./BookItem";
import { getFeaturedBooks } from "../utils";

function BookList() {
  const featuredBooks = useLoaderData();
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="mx-auto max-w-7xl px-8 pb-32">
      <h3 className="py-20 text-center text-xl font-medium">Featured Books</h3>
      <div className="grid gap-x-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
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
