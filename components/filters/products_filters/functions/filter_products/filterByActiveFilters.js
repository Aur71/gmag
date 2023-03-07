import filterByPrice from './filterByPrice';
import filterByRating from './filterByRating';

export default function filterByActiveFilters(data, filters) {
  // A FUNCTION THE FILTERS A LIST OF PRODUCTS BASED ON THE ACTIVE FILTERS
  if (!filters.length) return data;
  const productsIds = [];

  filters.forEach((filter) => {
    console.log(filter);

    if (filter.name === 'Price') return filterByPrice(filter);
    if (filter.name === 'Rating') return filterByRating(filter);

    const { filterName, options } = filter;

    data.forEach((item) => {
      const { specifications } = item;
      const specification = specifications.find(
        (spec) => spec.key === filterName
      );
      if (!specification) return;
      const { value } = specification;
      const hasValue = options.some((option) => option === value);
      if (hasValue) productsIds.push(item.id);
    });
  });

  const countedIds = [];

  productsIds.forEach((id) => {
    const hasId = countedIds.some((obj) => obj.id === id);
    if (hasId)
      return countedIds.forEach((obj) => {
        if (obj.id === id) return obj.count++;
      });

    const obj = { id, count: 1 };
    countedIds.push(obj);
  });

  // Filtering the data based on the countedIds.
  // Return true if countedIds[0].id === item.id && countedIds[0].count === filter.length
  // NEED TO ADD FILTERING BY IF THE FILTERNAME IS PRICE AND RATING
  const filteredData = data.filter((item) => {
    const { id } = item;
    const hasId = countedIds.some((obj) => {
      if (obj.id === id && obj.count === filters.length) return true;
      return false;
    });
    return hasId;
  });

  return filteredData;
}
