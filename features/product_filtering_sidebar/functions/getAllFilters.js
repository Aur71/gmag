import getFilters from './get_filters/getFilters';
import updateFilters from './updateFilters';

export default function getAllFilters(products, activeFilters) {
  if (!activeFilters.length) return getFilters(products);
  return updateFilters(products, activeFilters);
}
