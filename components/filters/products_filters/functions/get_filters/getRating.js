export default function getRating(list) {
  // CREATES A RATING ARRAY AND FOR EACH PRODUCT RATING THAT MACHES A STAR VALUE THE COUNT WILL BE INCREMENTED BY 1
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

  list.forEach((item) => {
    rating.forEach((star) => {
      if (Math.round(item.rating) === star.value) {
        star.count++;
      }
    });
  });

  return { name: 'Rating', options: rating };
}
