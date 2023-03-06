import filterByFilters from './filterByFilters';
import getFilters from './getFilters';
// THE FILTER SIDEBAR UPDATES BASED ON EVERY FILTER, ALSO ADD THE RATING AND PRICE RANGE TO THE FILTERS WHEN NEEDED
// CREATE A FUNCTION THAT TAKES THE CURRENT FILTERS AND THE NEW DATA, IT WILL RETURN THE NEW FILTERS BASED ON THE NEW DATA

export default function updateFilters(activeFilters, data) {
  const originalFilters = getFilters(data);
  const initialFilters = originalFilters.filter((filter) => {
    const isFilterActive = activeFilters.some(
      (item) => item.filterName === filter.name
    );
    if (isFilterActive) return filter;
  });

  const currentData = filterByFilters(data, activeFilters);
  const updatedFilters = getFilters(currentData);
  const allFilters = [...initialFilters, ...updatedFilters];
  const newFilters = [];

  allFilters.forEach((filter) => {
    const hasFilter = newFilters.some((item) => item.name === filter.name);
    if (!hasFilter) return newFilters.push(filter);
  });

  return newFilters;
}
