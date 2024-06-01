import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BookInfo() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await fetch(`http://localhost:8000/books?id=${id}`);

        const data = await response.json();
        const bookData = data[0];
        setBook(bookData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBook();
  }, [id]);

  return (
    <section>
      {book ? (
        <div className="container mx-auto gap-8 px-4 py-20 lg:grid lg:grid-cols-2">
          <figure className="mb-8 flex items-center justify-center bg-neutral-100 py-16 lg:mb-0">
            <img
              className="block h-60 w-40 object-cover"
              src={book.imgUrl}
              alt={`cover of ${book.title}`}
            />
          </figure>
          <div className="flex flex-col gap-4 lg:justify-between lg:gap-0">
            <div>
              <p className="text-2xl font-semibold">{book.title}</p>
              <p className="text-xl font-medium">{book.author}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">
                {book.unitPrice}
              </p>
              <p>
                Condition: <span className="font-medium">{book.condition}</span>
              </p>
            </div>
            <div>
              <p>{book.category[0]}</p>
              <p>
                {book.format}, {book.pageCount} pages
              </p>
            </div>
            <p className="pb-8">{book.description}</p>
            <button
              className="rounded bg-zinc-800 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-zinc-950"
              type="button"
            >
              Add to bag
            </button>
          </div>
        </div>
      ) : (
        "Hi"
      )}
    </section>
  );
}

export default BookInfo;
