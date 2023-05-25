export default function sortProducts(products, sortBy) {
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'Increasing price') return a.currentPrice - b.currentPrice;
    if (sortBy === 'Decreasing price') return b.currentPrice - a.currentPrice;
    if (sortBy === 'No. reviews') return b.reviewsCount - a.reviewsCount;
    if (sortBy === 'Discount %') return b.discount - a.discount;
    return 0;
  });

  return sortedProducts;
}
