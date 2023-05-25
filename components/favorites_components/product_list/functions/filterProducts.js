export default function filterProducts(products, filterBy) {
  if (filterBy === 'All products') return products;

  const filteredProducts = products.filter((product) => {
    const rating = Math.round(product.rating);
    if (filterBy === '5 star products' && rating === 5) return true;
    if (filterBy === '4 star products' && rating === 4) return true;
    if (filterBy === '3 star products' && rating === 3) return true;
    if (filterBy === '2 star products' && rating === 2) return true;
    if (filterBy === '1 star products' && rating === 1) return true;
    return false;
  });

  return filteredProducts;
}
