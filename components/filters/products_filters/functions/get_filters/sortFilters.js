export default function sortFilters(data) {
  const initialSort = data.sort((a, b) => {
    const firstFilterName = a.name;
    const secondFilterName = b.name;

    return secondFilterName.localeCompare(firstFilterName);
  });

  return initialSort.sort((a, b) => {
    const firstFilterName = a.name;
    const secondFilterName = b.name;
    if (firstFilterName === 'Price') return -1;
    if (firstFilterName === 'Rating') return -1;
    return 0;
  });
}
