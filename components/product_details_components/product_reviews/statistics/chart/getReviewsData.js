export default function (reviews) {
  const data = [
    {
      stars: 1,
      count: 0,
    },
    {
      stars: 2,
      count: 0,
    },
    {
      stars: 3,
      count: 0,
    },
    {
      stars: 4,
      count: 0,
    },
    {
      stars: 5,
      count: 0,
    },
  ];

  reviews.forEach((review) => {
    const { stars } = review;
    if (stars === 1) data[0].count++;
    if (stars === 2) data[1].count++;
    if (stars === 3) data[2].count++;
    if (stars === 4) data[3].count++;
    if (stars === 5) data[4].count++;
  });

  return data;
}
