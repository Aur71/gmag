export default function sortData(data, sortBy) {
  const sortedData = data.sort((a, b) => {
    if (sortBy === 'the most popular') return b.numOfOrders - a.numOfOrders;
    if (sortBy === 'newest') return b.date - a.date;
    if (sortBy === 'increasing price') return a.currentPrice - b.currentPrice;
    if (sortBy === 'decreasing price') return b.currentPrice - a.currentPrice;
    if (sortBy === 'no. reviews') return b.reviewsCount - a.reviewsCount;
    if (sortBy === 'discount %') return b.discount - a.discount;
    return 0;
  });

  return sortedData;
}
