export default function filterProducts(data, filters) {
  // A FUNCTION THE FILTERS A LIST OF PRODUCTS BASED ON THE ACTIVE FILTERS
  if (!filters.length) return data;
  const productsIds = [];

  filters.forEach((filter) => {
    // HANDLEING THE PRICE FILTERING
    if (filter.filterName === 'Price') {
      const { min, max } = filter;
      data.forEach((item) => {
        const { currentPrice } = item;
        if (currentPrice >= min && currentPrice <= max)
          productsIds.push(item.id);
      });
      return;
    }

    // HANDLEING THE RATING FILTERING
    if (filter.filterName === 'Rating') {
      const { options } = filter;

      data.forEach((item) => {
        const rating = Math.round(item.rating);
        const hasRating = options.some((option) => option === rating);
        if (hasRating) productsIds.push(item.id);
      });
      return;
    }

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
