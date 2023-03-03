export default function filterByFilters(data, filters) {
  if (!filters.length) return data;
  const items = [];

  filters.forEach((filter) => {
    const { filterName, options } = filter;

    data.forEach((item) => {
      const { specifications } = item;
      // IF THE OBJECT IS NOT FOUND IT RETUNS UNDEFIUNED
      const specification = specifications.find(
        (spec) => spec.key === filterName
      );
      const { value } = specification;
      const hasValue = options.some((option) => option === value);
      if (hasValue) items.push(item.id);
    });
  });

  const counts = {};

  for (let i = 0; i < items.length; i++) {
    const num = items[i];
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  console.log(counts);

  // WHEN THE NEW ARRAY OF ITEMS IS RETUNRED BASED ON THE INITIAL FILTERS BLOCK(BRAND / PROCESSOR) THE FILTER SIDEBAR NEEDS TO BE UPDATED WITH THE INITIAL FILTER BLOCK THE SAME AND ALL OTHER FILTER BLOCK UPDATED BASED ON THE NEW ARRAY OF ITEMS

  return data;
}
