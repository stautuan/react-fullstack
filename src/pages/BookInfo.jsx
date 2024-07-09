import { useLoaderData } from "react-router-dom";

import { formatPrice, getBook } from "../utils";

function BookInfo() {
  const book = useLoaderData();

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
    <section>
      {book ? (
        <div className="mx-auto max-w-7xl gap-8 px-8 py-20 lg:grid lg:grid-cols-2">
          <figure className="mb-8 flex items-center justify-center bg-neutral-100 py-16 lg:mb-0">
            <img
              className="block h-[348px] w-[220px] rounded-sm object-cover"
              src={imgUrl}
              alt={`cover of ${title}`}
            />
          </figure>
          <div className="flex flex-col gap-4 lg:justify-between lg:gap-0">
            <div>
              <p className="font-serif text-2xl font-bold">{title}</p>
              <p className="text-l font-medium">{author}</p>
            </div>
            <p>{description}</p>
            <div className="pb-8">
              <p>{category[0]}</p>
              <p>
                {format}, {pageCount} pages
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl font-bold ">{dollarsAmount}</p>
              <p>
                Condition: <span className="font-medium">{condition}</span>
              </p>
            </div>

            <button
              className="self-start rounded-sm bg-neutral-500 px-10 py-3 text-sm font-bold text-neutral-100 transition-all duration-300 hover:bg-zinc-900"
              type="button"
              onClick={() => console.log("add to bag")}
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

export async function loader({ params }) {
  const bookInfo = await getBook(params.id);
  return bookInfo;
}

export default BookInfo;
