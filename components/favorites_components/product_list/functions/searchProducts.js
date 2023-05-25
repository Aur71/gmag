export default function searchProducts(products, searchTerm) {
  if (!searchTerm) return products;

  const searchedProducts = products.filter((product) => {
    const name = product.name.toLowerCase();
    return name.includes(searchTerm.toLowerCase());
  });

  return searchedProducts;
}
