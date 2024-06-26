const BASE_URL = "https://book-data-chi.vercel.app";

export async function getBooks() {
  const response = await fetch(`${BASE_URL}/books`);
  const data = await response.json();
  return data;
}

export async function getFeaturedBooks() {
  const response = await fetch(`${BASE_URL}/books?_start=0&_limit=4`);
  const data = await response.json();
  return data;
}

export async function getBook(id) {
  const response = await fetch(`${BASE_URL}/books?id=${id}`);
  const data = await response.json();
  const bookData = data[0];
  return bookData;
}

export function formatPrice(unitPrice) {
  const dollarsAmount = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format((unitPrice / 100).toFixed(2));
  return dollarsAmount;
}
