export default function filterByPrice(data, min, max) {
  if (!min || !max) return data;

  const filteredByPrice = data.filter((item) => {
    const price = item.currentPrice;
    if (price >= min && price <= max) return item;
  });

  return filteredByPrice;
}
