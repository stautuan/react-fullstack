export async function getFeaturedBooks() {
  const response = await fetch("http://localhost:8000/books?_start=0&_limit=4");
  const data = await response.json();
  return data;
}

export function formatPrice(unitPrice) {
  const dollarsAmount = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format((unitPrice / 100).toFixed(2));
  return dollarsAmount;
}
