export default function filterProductsByRating(products, filter) {
  const { options } = filter;
  const filteredByRating = products.filter((product) => {
    const rating = Math.round(product.rating);
    return options.some((option) => option.value === rating);
  });
  return filteredByRating;
}
