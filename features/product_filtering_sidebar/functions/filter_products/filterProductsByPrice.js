export default function filterProductsByPrice(products, filter) {
  const { min, max } = filter;
  const filteredByPrice = products.filter((product) => {
    const { currentPrice } = product;
    if (currentPrice >= min && currentPrice <= max) return true;
    return false;
  });

  return filteredByPrice;
}
