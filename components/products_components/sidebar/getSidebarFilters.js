import getFilters from './get_filters/getFilters';
import filterProducts from '../products/filterProducts';
import sortFilters from './get_filters/sortFilters';

export default function getSidebarFilters(activeFilters, data, initialFilters) {
  const originalFilters = getFilters(data);
  const sortedOriginalFilters = sortFilters(originalFilters);
  if (!activeFilters.length) return sortedOriginalFilters;

  const currentData = filterProducts(data, activeFilters);
  const updatedFilters = getFilters(currentData);
  const allFilters = [...initialFilters, ...updatedFilters];
  const newFilters = [];

  allFilters.forEach((filter) => {
    const hasFilter = newFilters.some((item) => item.name === filter.name);
    if (!hasFilter) return newFilters.push(filter);
  });
  const sortedFilters = sortFilters(newFilters);
  return sortedFilters;
}
