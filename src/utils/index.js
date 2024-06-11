export function formatPrice(unitPrice) {
  const dollarsAmount = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format((unitPrice / 100).toFixed(2));
  return dollarsAmount;
}
