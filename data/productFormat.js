export const productFormat = {
  id: 1,
  productType: 'computer',
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
  stock: 10,
  numOfOrders: 52,
  // MILISECONDS FORMAT
  date: 1677515850836,

  //
  //
  // SPECIFICATIONS FORMAT

  // IF SHOW IS FILTER TRUE THE BACKEND WILL ALSO SEND THIS OBJECT TO THE FRONT END ELSE THIS OBJECT CAN BE ACCEST ONLY WHEN THE PRODUCT IS REQUESTED
  specifications: {
    generalInformation: [
      {
        showAsFilter: true,
        key: 'Destined for',
        value: 'Gaming',
      },
      {
        showAsFilter: true,
        key: 'Brand',
        value: 'GRT',
      },
      {
        showAsFilter: true,
        key: 'Operating system',
        value: 'Windows',
      },
    ],

    technicalInformation: [
      {
        title: 'processor',
        info: [
          {
            showAsFilter: true,
            key: 'Processor model',
            value: 'Intel® Core™ i5-10400F',
          },
          {
            showAsFilter: true,
            key: 'Processor manufacturer',
            value: 'Intel',
          },
          {
            showAsFilter: false,
            key: 'Architecture',
            value: 'Comet Lake',
          },
          {
            showAsFilter: false,
            key: 'Number of cores',
            value: '6',
          },
          {
            showAsFilter: false,
            key: 'Number of threads',
            value: '12',
          },
          {
            showAsFilter: false,
            key: 'Nominal frequency',
            value: '2.9 GHz',
          },
          {
            showAsFilter: false,
            key: 'Turbo Boost frequency',
            value: '4.3 GHz',
          },
          {
            showAsFilter: false,
            key: 'Cache',
            value: '12 MB',
          },
          {
            showAsFilter: false,
            key: 'Processor technology',
            value: '14 nm',
          },
          {
            showAsFilter: false,
            key: 'Integrated graphics processor',
            value: 'No integrated graphics processor',
          },
        ],
      },

      {
        title: 'video card',
      },

      {
        title: 'motherboard',
      },

      {
        title: 'ram memory',
      },

      {
        title: 'hdd memory',
      },

      {
        title: 'ssd memory',
      },

      {
        title: 'case',
      },

      {
        title: 'source',
      },
    ],
  },

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
        id: 'review id',
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

  //
  //
  // QUESTIONS FORMAT
  questions: [
    {
      id: 'question id',
      postedOn: '22 Aug 2022',
      postedBy: {
        userId: 'some user id',
        userName: 'Cosmin',
      },
      question: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      //   ANSWERS CAN BE POSTED BY USERS AS WELL AS ADMINS, IF AN ADMIN POSTS AND ANSWER HE WILL HAVE A CHEKMARK BESIDES HIS NAME
      answers: [
        {
          id: 'answer id',
          postedOn: '22 Aug 2022',
          postedBy: {
            userId: 'some user id',
            userName: 'Cosmin',
          },
          answer: 'Lorem ipsum dolor sit amet.',
        },
      ],
    },
  ],

  //
  //
  // RECOMANDATIONS FORMAT
  // UP TO 4 RECOMMENDED PRODUCTS. A LIST OF THEIR ID THAT WILL BE SEND AND HANDELED BY THE BACKEND
  recomandations: ['id1', 'id2', 'id3', 'id4'],
};
