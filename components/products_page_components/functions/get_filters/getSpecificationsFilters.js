export default function getSpecificationsFilters(list) {
  // A FUNCTION THE GETS ALL THE FILTERS FROM ALL THE PRODUCTS SPECIFICATIONS ARRAY AND RETURNS AN OBJECT
  // const obj = {
  //   optionName: 'Intel',
  //   count: 1,
  // };
  const data = [];

  list.forEach((item) => {
    const { specifications } = item;

    specifications.forEach((spec) => {
      const { key, value, showAsFilter } = spec;

      if (!showAsFilter) return;

      // CHECKS IF THERE IS AN OBJECT INSIDE THE ARRAY WITH THE CURRENT KEY (BRAND, DESTINED FOR, PROCESSOR TYPE...)
      const containsKey = data.some((obj) => obj.name === key);

      if (!containsKey) {
        data.push({
          name: key,
          options: [
            {
              optionName: value,
              count: 1,
            },
          ],
        });

        return;
      }

      data.forEach((filter) => {
        if (filter.name !== key) return;

        const containsOption = filter.options.some(
          (option) => option.optionName === value
        );

        if (!containsOption) {
          filter.options.push({
            optionName: value,
            count: 1,
          });

          return;
        }

        filter.options.forEach((option) => {
          if (option.optionName === value) {
            option.count++;
          }
        });

        return;
      });
    });
  });

  const sortedData = sortOptions(data);

  return sortedData;
}

// A FUNCTION THE SORTS THE OPTIONS OF AN FILTER
const sortOptions = (list) => {
  const filteredOptions = list.filter((item) => {
    const { options } = item;
    if (!options.length) return false;
    return true;
  });

  // SORTING THE OPTIONS ARRAY INSIDE EVERY FILTER
  const sortedOptions = filteredOptions.map((item) => {
    const { options } = item;

    options.sort((a, b) => {
      const nameA = a.optionName.toString().toUpperCase();
      const nameB = b.optionName.toString().toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    return item;
  });

  return sortedOptions;
};
