import BookItem from "./BookItem";

function BookList() {
  return (
    <section className="text-neutral-900">
      <div className="container mx-auto px-2.5 pb-32">
        <div>
          <h3 className="py-20 text-center text-xl font-medium">
            Featured Books
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
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
