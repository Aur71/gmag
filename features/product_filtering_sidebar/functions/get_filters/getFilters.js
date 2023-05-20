import getPriceFilter from './getPriceFilter';
import getRatingFilter from './getRatingFilter';
import getSpecificationsFilters from './getSpecificationsFilters';
import sortFilters from '../sortFilters';

export default function getFilters(products) {
  const priceFilter = getPriceFilter(products);
  const ratingFilter = getRatingFilter(products);
  const specificationsFilters = getSpecificationsFilters(products);
  const allFilters = [priceFilter, ratingFilter, ...specificationsFilters];
  const sortedFilters = sortFilters(allFilters);
  return sortedFilters;
}
