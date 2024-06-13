import BookItem from "../components/BookItem";
import { useLoaderData } from "react-router-dom";
import { getBooks } from "../utils";

function Books() {
  const books = useLoaderData();

  return (
    <div className="container mx-auto px-4 pb-32">
      <h3 className="py-20 text-center text-xl font-medium">Books</h3>
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const books = await getBooks();
  return books;
}

export default Books;
