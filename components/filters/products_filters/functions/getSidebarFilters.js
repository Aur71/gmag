import getFilters from './get_filters/getFilters';
import filterByFilters from './filter_products/filterByActiveFilters';

export default function getSidebarFilters(activeFilters, data) {
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
