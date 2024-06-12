import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatPrice } from "../utils";

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
    <section className="h-screen">
      {book ? (
        <div className="container mx-auto gap-8 px-4 py-20 lg:grid lg:grid-cols-2">
          {(() => {
            const {
              imgUrl,
              title,
              author,
              unitPrice,
              condition,
              category,
              format,
              pageCount,
              description,
            } = book;
            const dollarsAmount = formatPrice(unitPrice);
            return (
              <>
                <figure className="mb-8 flex items-center justify-center bg-neutral-100 py-16 lg:mb-0">
                  <img
                    className="block h-60 w-40 object-cover"
                    src={imgUrl}
                    alt={`cover of ${title}`}
                  />
                </figure>
                <div className="flex flex-col gap-4 lg:justify-between lg:gap-0">
                  <div>
                    <p className="text-2xl font-semibold">{title}</p>
                    <p className="text-xl font-medium">{author}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">
                      {dollarsAmount}
                    </p>
                    <p>
                      Condition:{" "}
                      <span className="font-medium">{condition}</span>
                    </p>
                  </div>
                  <div>
                    <p>{category[0]}</p>
                    <p>
                      {format}, {pageCount} pages
                    </p>
                  </div>
                  <p className="pb-8">{description}</p>
                  <button
                    className="rounded bg-zinc-800 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-zinc-950"
                    type="button"
                    onClick={() => console.log("add to bag")}
                  >
                    Add to bag
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      ) : (
        "Hi"
      )}
    </section>
  );
}

export default BookInfo;
