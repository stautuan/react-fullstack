import { Link } from "react-router-dom";
import { formatPrice } from "../utils";

function BookItem({ book }) {
  const { id, imgUrl, title, author, unitPrice } = book;
  const dollarsAmount = formatPrice(unitPrice);

  return (
    <article>
      <Link to={`/books/${id}`}>
        <div className="mb-3 flex place-content-center bg-neutral-100 py-4">
          <img
            src={imgUrl}
            className="block h-60 w-[9.5rem] rounded-sm bg-neutral-300 object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-md font-semibold">{title}</p>
          <p className="text-xs leading-4">by {author}</p>
          <p className="text-xl font-medium">{dollarsAmount}</p>
        </div>
      </Link>
    </article>
  );
}

export default BookItem;
