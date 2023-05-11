export default function sortFilters(filters) {
  const initialSort = filters.sort((a, b) => {
    const firstFilterName = a.filterName;
    const secondFilterName = b.filterName;
    return secondFilterName.localeCompare(firstFilterName);
  });

  // Puts the price and rating on top
  return initialSort.sort((a) => {
    const firstFilterName = a.filterName;
    if (firstFilterName === 'Price') return -1;
    if (firstFilterName === 'Rating') return -1;
    return 0;
  });
}
