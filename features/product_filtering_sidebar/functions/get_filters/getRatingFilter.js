export default function getRatingFilter(products) {
  const rating = [
    {
      id: '5 stars',
      value: 5,
      count: 0,
    },

    {
      id: '4 stars',
      value: 4,
      count: 0,
    },

    {
      id: '3 stars',
      value: 3,
      count: 0,
    },

    {
      id: '2 stars',
      value: 2,
      count: 0,
    },

    {
      id: '1 stars',
      value: 1,
      count: 0,
    },
  ];

  products.forEach((product) => {
    const productRating = Math.round(product.rating);
    if (productRating === 5) rating[0].count += 1;
    if (productRating === 4) rating[1].count += 1;
    if (productRating === 3) rating[2].count += 1;
    if (productRating === 2) rating[3].count += 1;
    if (productRating === 1) rating[4].count += 1;
  });

  const ratingFilter = {
    filterName: 'Rating',
    options: [rating],
  };

  return ratingFilter;
}
