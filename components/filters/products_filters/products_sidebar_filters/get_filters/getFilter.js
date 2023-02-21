export default function getFilter(list) {
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

  return data;
}
