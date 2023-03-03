export default function filterByFilters(data, filters) {
  if (!filters.length) return data;

  const filteredData = data.filter((item) => {
    return item;
  });

  console.log(filters);

  return filteredData;
}
