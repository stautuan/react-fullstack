import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import BookItem from "./BookItem";
import { getFeaturedBooks } from "../utils";

function BookList() {
  const featuredBooks = useLoaderData();
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="mx-auto max-w-7xl px-8 pb-32">
      <h3 className="font-serif py-20 text-center text-2xl font-semibold">
        Featured Books
      </h3>
      <div className="grid gap-x-2 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 ">
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
