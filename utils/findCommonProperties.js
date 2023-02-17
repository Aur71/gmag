export function findCommonProperties(list) {
  const properties = {};

  list.forEach((item) => {
    Object.entries(item).forEach(([key, value]) => {
      if (!properties[key]) {
        properties[key] = [];
      }
      properties[key].push(value);
    });
  });

  const data = Object.entries(properties).map(([prop, options]) => {
    if (options.length >= 2) {
      let name = prop.replace(/([A-Z])/g, ' $1');

      const uniqueOptions = [...new Set(options)];

      const countedOptions = uniqueOptions.map((uniqueOption) => {
        let count = 0;

        options.forEach((option) => {
          if (option === uniqueOption) {
            count++;
          }
        });

        return {
          name: uniqueOption,
          count,
        };
      });

      return { propName: prop, name, options: countedOptions };
    }
  });

  const sortedData = data.map((item) => {
    const sortedOptions = item.options.sort((a, b) => {
      const nameA = a.name ? a.name.toString().toLowerCase() : '';
      const nameB = b.name ? b.name.toString().toLowerCase() : '';

      if (typeof a.name === 'number' && typeof b.name === 'number') {
        return a.name - b.name;
      }

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    return { ...item, options: sortedOptions };
  });

  return sortedData;
}
