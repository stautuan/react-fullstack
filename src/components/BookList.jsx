import BookItem from "./BookItem";

function BookList() {
  return (
    <section className="text-neutral-700">
      <div className="container mx-auto px-2.5">
        <div>
          <h3 className="py-20 text-center text-xl font-medium">
            Featured Books
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
        </div>
      </div>
    </section>
  );
}

export default BookList;
