export default function sortProducts(products, sortBy) {
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'Most popular') return b.orders.sold - a.orders.sold;
    if (sortBy === 'Increasing price') return a.currentPrice - b.currentPrice;
    if (sortBy === 'Decreasing price') return b.currentPrice - a.currentPrice;
    if (sortBy === 'Increasing rating') return a.rating - b.rating;
    if (sortBy === 'Decreasing rating') return b.rating - a.rating;
    if (sortBy === 'No. reviews') return b.reviewsCount - a.reviewsCount;
    if (sortBy === 'Discount %') return b.discount - a.discount;
    return 0;
  });

  return sortedProducts;
}
