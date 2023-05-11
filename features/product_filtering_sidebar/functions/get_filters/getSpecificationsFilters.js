export default function getSpecificationsFilters(products) {
  const filtersMap = new Map();

  products.forEach((product) => {
    product.specifications.forEach((specification) => {
      const { key: filterName, value: option } = specification;

      if (!filtersMap.has(filterName)) {
        filtersMap.set(filterName, new Map([[option, 1]]));
      } else {
        const optionsMap = filtersMap.get(filterName);
        if (optionsMap.has(option)) {
          const count = optionsMap.get(option);
          optionsMap.set(option, count + 1);
        } else {
          optionsMap.set(option, 1);
        }
      }
    });
  });

  const specificationsFilters = Array.from(
    filtersMap,
    ([filterName, optionsMap]) => {
      const options = Array.from(optionsMap, ([option, count]) => ({
        option,
        count,
      }));
      options.sort((a, b) => a.option.localeCompare(b.option)); // Sort options alphabetically
      return { filterName, options };
    }
  );

  return specificationsFilters;
}
