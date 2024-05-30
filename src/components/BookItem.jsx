import book from "/images/book-1.jpeg";

function BookItem() {
  return (
    <article>
      <div className="mb-3 flex place-content-center bg-neutral-100 py-4">
        <img
          src={book}
          className="block h-60 w-40 bg-neutral-300 object-cover"
        />
      </div>
      <p className="text-sm font-medium">Twilight</p>
      <p className="text-xs">Stephenie Meyer</p>
      <p className="py-2 text-xl">$3.00</p>
    </article>
  );
}

export default BookItem;
