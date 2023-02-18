export function findCommonProperties(list) {
  const properties = {};

  console.log(list);

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

  return data;
}
