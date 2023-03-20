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
  //
  // ADD ALL BUYING OPTIONS AND COLORS
  //

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
  // SPECIFICATIONS FORMAT
  specifications: [
    {
      showAsFilter: true,
      key: 'Destined for',
      value: 'Gaming',
      category: 'general information',
    },
    {
      showAsFilter: true,
      key: 'Brand',
      value: 'GRT',
      category: 'general information',
    },
    {
      showAsFilter: true,
      key: 'Operating system',
      value: 'Windows',
      category: 'general information',
    },
    {
      showAsFilter: true,
      key: 'Processor model',
      value: 'Intel® Core™ i5-10400F',
      category: 'processor',
    },
    {
      showAsFilter: true,
      key: 'Processor manufacturer',
      value: 'Intel',
      category: 'processor',
    },
    {
      showAsFilter: true,
      key: 'Video card type',
      value: 'Dedicated',
      category: 'video card',
    },
    {
      showAsFilter: true,
      key: 'Video card model',
      value: 'GeForce® RTX 2060',
      category: 'video card',
    },
    {
      showAsFilter: true,
      key: 'RAM capacity',
      value: '16 GB',
      category: 'memory',
    },
    {
      showAsFilter: true,
      key: 'SSD capacity',
      value: '128 GB',
      category: 'ssd',
    },
    {
      showAsFilter: true,
      key: 'HDD capacity',
      value: '1 TB',
      category: 'hard disk',
    },
    {
      showAsFilter: true,
      key: 'Processor socket',
      value: 'LGA 1200',
      category: 'processor',
    },
  ],

  //
  //
  // DESCRIPTION
  description: [
    //
    //
    // LINK MODEL
    {
      element: 'a',
      content: 'this text is a link',
      path: '#',
      styles: {
        fontWeight: 900,
      },
    },
    //
    //
    // BOLD MODEL
    {
      element: 'b',
      content: 'this text is a bold text',
    },
    //
    //
    // ITALIC MODEL
    {
      element: 'i',
      content: 'this text is italic',
    },
    //
    //
    // SPAN MODEL
    {
      element: 'span',
      content: 'this is a span',
    },
    //
    //
    // HEADINGS MODEL
    {
      element: 'h2',
      content: [
        'This is an h2',
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
      styles: {
        color: 'green',
      },
    },
    {
      element: 'h3',
      content: ['This is an h3'],
    },
    {
      element: 'h4',
      content: ['This is an h4'],
    },
    {
      element: 'h5',
      content: ['This is an h5'],
    },
    {
      element: 'h6',
      content: ['This is an h6'],
    },
    //
    //
    // PARAGRAPH MODEL
    {
      element: 'p',
      content: [
        'This is a paragraph',
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
    //
    //
    // LIST MODEL
    {
      element: 'ol',
      content: ['List item 1', 'List item 2', 'List item 3'],
    },
    {
      element: 'ul',
      content: ['List item 1', 'List item 2', 'List item 3'],
    },
    //
    //
    // IMG MODEL
    {
      element: 'img',
      src: '/temp/computer.png',
      alt: 'laptop',
      width: 500,
      height: 500,
    },

    //
    //
    // YOUTUBE VIDEO MODEL
    {
      element: 'youtube video',
      videoId: 'gJMXmsG9ZSI',
      videoTitle: 'YouTube video player',
    },
    //
    //
    // CONTAINER MODEL
    {
      element: 'container',
      content: [
        {
          element: 'img',
          src: '/temp/computer.png',
          alt: 'laptop',
          width: 500,
          height: 500,
          styles: {
            margin: '0 auto',
          },
        },

        {
          element: 'p',
          content: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ab corporis natus recusandae earum omnis fugiat qui assumenda corrupti incidunt odio repellat rem quos nesciunt possimus, laboriosam necessitatibus quod. Cupiditate laborum voluptatum ab velit sint nam consectetur ea molestias accusamus aliquam. Assumenda quod inventore non ea, magni cum id porro eveniet amet velit qui harum dolor perferendis perspiciatis incidunt laboriosam facilis. Omnis corporis nobis ipsam mollitia aut illo corrupti expedita ducimus iste facere illum nulla quos soluta vel, rem quae officiis ratione qui. Saepe at beatae fuga dolor sed amet, illum quibusdam est. Dolor rerum fugiat dolorem nulla fuga obcaecati.',
          ],
          styles: {
            margin: 'auto 0',
          },
        },
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
