function BookItem({ book }) {
  return (
    <article>
      <div className="mb-3 flex place-content-center bg-neutral-100 py-4">
        <img
          src={book.imgUrl}
          className="block h-60 w-[9.5rem] bg-neutral-300 object-cover"
        />
      </div>
      <p className="text-sm font-medium">{book.title}</p>
      <p className="text-xs">{book.author}</p>
      <p className="py-2 text-xl">{book.unitPrice}</p>
    </article>
  );
}

export default BookItem;
