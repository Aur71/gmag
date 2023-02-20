import getPrice from './getPrice';
import getRating from './getRating';
import getFilter from './getFilter';

export default function getFilters(list) {
  const price = getPrice(list);
  const rating = getRating(list);
  const filters = getFilter(list);

  const data = [price, rating, filters];

  return data;
}
