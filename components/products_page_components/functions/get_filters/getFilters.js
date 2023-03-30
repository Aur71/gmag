import getPrice from './getPrice';
import getRating from './getRating';
import getSpecificationsFilters from './getSpecificationsFilters';

export default function getFilters(list) {
  const price = getPrice(list);
  const rating = getRating(list);
  const specificationsFilters = getSpecificationsFilters(list);

  const filters = [price, rating, ...specificationsFilters];

  return filters;
}
