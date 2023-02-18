export const computers = [
  {
    id: 1,
    name: 'PC Gaming GRT RGB with Intel® Core™ i5-10400F processor up to 4.30GHz, 16GB DDR4, 1TB HDD, 480GB SSD, GeForce® RTX 2060 6GB GDDR6',
    img: 'api/img/link',
    currentPrice: 1000,
    oldPrice: null,
    discount: '0%',

    // currentPrice: 1000,
    // oldPrice: 1100,
    // discount: '9%',

    rating: 4.7,
    reviewsCount: 20,

    //
    //
    // DESCRIPTION FORMAT
    description: [
      {
        id: 'some random id',
        element: 'h1',
        content:
          'PC Gaming GRT RGB with Intel® Core™ i5-10400F processor up to 4.30GHz, 16GB DDR4, 1TB HDD, 480GB SSD, GeForce® RTX 2060 6GB GDDR6',
      },
      {
        id: 'some random id',
        element: 'img',
        path: 'link to the img',
      },
      {
        id: 'some random id',
        element: 'h2',
        content: 'About',
      },
      {
        id: 'some random id',
        element: 'p',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rem non qui, facilis nam harum ullam? Alias veritatis architecto culpa.',
      },

      {
        id: 'some random id',
        element: 'ul',
        items: [
          'Operating system - Windows 11 Pro',
          'Processor - Quad-Core Intel Celeron J4125 (up to 2.7 GHz)',
        ],
      },
    ],

    //
    //
    // SPECIFICATIONS FORMAT
    specifications: {},

    //
    //
    // REVIEWS FORMAT
    reviewsData: {
      rating: 4.7,
      reviewsCount: 20,
      starsCount: {
        5: 10,
        4: 5,
        3: 5,
        2: 0,
        1: 0,
      },
      reviews: [
        {
          stars: 5,
          title: 'Good stuff',
          content: 'Perfect for fps games like csgo.',
          likes: 0,
          postedOn: '22 Aug 2022',
          postedBy: {
            userId: 'some user id',
            userName: 'Cosmin',
            userImg: 'user img',
          },
          comments: [
            {
              comment: 'Lorem ipsum dolor sit amet.',
              postedOn: '27 Oct 2022',
              postedBy: {
                userId: 'some user id',
                userImg: 'some url to an img',
                userName: 'Gigel',
              },
            },
          ],
        },
      ],
    },
  },

  //
  //
  // QUESTIONS FORMAT

  //
  //
  // RECOMANDATIONS FORMAT
];
