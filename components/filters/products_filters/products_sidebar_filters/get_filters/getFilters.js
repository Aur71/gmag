import getPrice from './getPrice';
import getRating from './getRating';

export default function getFilters(list) {
  const price = getPrice(list);
  const rating = getRating(list);

  return [list, price, rating];
}
