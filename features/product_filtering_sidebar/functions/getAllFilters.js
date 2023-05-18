import getPriceFilter from './get_filters/getPriceFilter';
import getRatingFilter from './get_filters/getRatingFilter';
import getSpecificationsFilters from './get_filters/getSpecificationsFilters';
import sortFilters from './sortFilters';

export default function getAllFilters(products, activeFilters) {
  // if (!activeFilters.length) {
  const priceFilter = getPriceFilter(products);
  const ratingFilter = getRatingFilter(products);
  const specificationsFilters = getSpecificationsFilters(products);
  const allFilters = [priceFilter, ratingFilter, ...specificationsFilters];
  const sortedFilters = sortFilters(allFilters);
  return sortedFilters;
  // }

  // console.log('update filters');
  // return products;
}
