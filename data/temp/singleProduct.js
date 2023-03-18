export const singleProduct = {
  id: 1,
  productType: 'computer',
  name: 'PC Gaming GRT RGB with Intel® Core™ i5-10400F processor up to 4.30GHz, 16GB DDR4, 1TB HDD, 480GB SSD, GeForce® RTX 2060 6GB GDDR6',
  img: 'api/img/link',
  // currentPrice: 1000,
  // oldPrice: null,
  // discount: '0%',
  currentPrice: 1000,
  oldPrice: 1100,
  discount: '9%',
  rating: 4,
  reviewsCount: 20,
  totalStock: 10,
  numOfOrders: 52,
  date: 1677515850836,

  // ADD ALL BUYING OPTIONS AND COLORS

  colors: [
    {
      name: 'Black',
      color: '#000000',
      stock: 3,
    },

    {
      name: 'White',
      color: '#FFFFFF',
      stock: 3,
    },

    {
      name: 'Red',
      color: '#B54040',
      stock: 2,
    },

    {
      name: 'Skyblue',
      color: '#43D2CF',
      stock: 2,
    },
  ],

  //
  //
  // IMAGES FORMAT
  images: [
    {
      name: 'img1',
      img: '/temp/computer.png',
    },
    {
      name: 'img2',
      img: '/temp/laptop.png',
    },
    {
      name: 'img3',
      img: '/temp/computer.png',
    },
    {
      name: 'img4',
      img: '/temp/computer.png',
    },
    {
      name: 'img5',
      img: '/temp/laptop.png',
    },
    {
      name: 'img6',
      img: '/temp/computer.png',
    },
    {
      name: 'img7',
      img: '/temp/laptop.png',
    },
    {
      name: 'img8',
      img: '/temp/computer.png',
    },
    {
      name: 'img9',
      img: '/temp/laptop.png',
    },
    {
      name: 'img10',
      img: '/temp/computer.png',
    },
    {
      name: 'img11',
      img: '/temp/laptop.png',
    },
  ],

  //
  //
  // SPECIFICATIONS FORMAT

  // IF SHOW IS FILTER TRUE THE BACKEND WILL ALSO SEND THIS OBJECT TO THE FRONT END ELSE THIS OBJECT CAN BE ACCEST ONLY WHEN THE PRODUCT IS REQUESTED
  specifications: {},

  //
  //
  // DESCRIPTION FORMAT
  description: [
    // LINK MODEL
    {
      element: 'a',
      content: 'this text is a link',
      path: '#',
      styles: {
        fontWeight: 900,
      },
    },

    // BOLD MODEL
    {
      element: 'b',
      content: 'this text is a bold text',
      styles: {
        fontSize: '20px',
      },
    },

    // ITALIC MODEL
    {
      element: 'i',
      content: 'this text is italic',
      styles: {
        fontSize: '20px',
      },
    },

    // SPAN MODEL
    {
      element: 'span',
      content: 'this is a span',
      styles: {
        fontSize: '20px',
      },
    },

    // HEADING MODEL h2 - h6 (h1 is used in the showcase above)
    {
      element: 'h2',
      content: [
        'This is a string',
        {
          element: 'b',
          content: 'this text is a bold text',
        },
        {
          element: 'i',
          content: 'this text is italic',
        },
        {
          element: 'a',
          content: 'this text is a link',
          path: '#',
        },
        {
          element: 'span',
          content: 'this text is a span',
          styles: {
            color: 'red',
          },
        },
        'this is another string.',
      ],
    },

    {
      element: 'h3',
      content: [
        'This is a string',
        {
          element: 'b',
          content: 'this text is a bold text',
        },
        {
          element: 'i',
          content: 'this text is italic',
        },
        {
          element: 'a',
          content: 'this text is a link',
          path: '#',
        },
        {
          element: 'span',
          content: 'this text is a span',
          styles: {
            color: 'red',
          },
        },
      ],
    },

    {
      element: 'h4',
      content: [
        'This is a string',
        {
          element: 'b',
          content: 'this text is a bold text',
        },
        {
          element: 'i',
          content: 'this text is italic',
        },
        {
          element: 'a',
          content: 'this text is a link',
          path: '#',
        },
        {
          element: 'span',
          content: 'this text is a span',
          styles: {
            color: 'red',
          },
        },
      ],
    },

    {
      element: 'h5',
      content: [
        'This is a string',
        {
          element: 'b',
          content: 'this text is a bold text',
        },
        {
          element: 'i',
          content: 'this text is italic',
        },
        {
          element: 'a',
          content: 'this text is a link',
          path: '#',
        },
        {
          element: 'span',
          content: 'this text is a span',
          styles: {
            color: 'red',
          },
        },
      ],
    },

    {
      element: 'h6',
      content: [
        'This is a string',
        {
          element: 'b',
          content: 'this text is a bold text',
        },
        {
          element: 'i',
          content: 'this text is italic',
        },
        {
          element: 'a',
          content: 'this text is a link',
          path: '#',
        },
        {
          element: 'span',
          content: 'this text is a span',
          styles: {
            color: 'red',
          },
        },
      ],
    },

    // PARAGRAPH MODEL
    {
      element: 'p',
    },

    // LIST MODEL
    {
      element: 'ol',
    },

    {
      element: 'ul',
    },

    // IMG MODEL
    {
      element: 'img',
      src: '/temp/laptop.png',
      alt: 'laptop',
      width: 1000,
      height: 1000,
    },

    // VIDEO MODEL
    {
      element: 'video',
    },

    // YOUTUBE VIDEO MODEL
    {
      element: 'youtube video',
    },

    // CONTAINER MODEL
    {
      element: 'container',
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
