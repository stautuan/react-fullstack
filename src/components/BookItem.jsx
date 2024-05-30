import book from "../../public/images/book-1.jpeg";

function BookItem() {
  return (
    <article>
      <div className="text-cente mb-3 flex place-content-center bg-neutral-100 py-4">
        <img
          src={book}
          className="block h-60 w-40 bg-neutral-300 object-cover"
        />
      </div>
      <p className="text-sm font-medium">Twilight</p>
      <p className="text-xs">Stephenie Meyer</p>
      <p className="py-2 text-xl text-zinc-900">$3.00</p>
    </article>
  );
}

export default BookItem;
