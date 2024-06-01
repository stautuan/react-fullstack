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
        <div>
          <p>This is {book.title}</p>
        </div>
      ) : (
        "Hi"
      )}
    </section>
  );
}

export default BookInfo;
