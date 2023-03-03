export default function filterByRating(data, rating) {
  if (!rating) return data;

  const filteredByRating = data.filter((item) => {
    const itemRating = Math.round(item.rating);
    if (itemRating === rating) return item;
  });

  return filteredByRating;
}
