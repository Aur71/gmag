// THIS IS THE DATA THAT I WILL RECEVE WHEN I REQUESTING /products/computers

// THE PRODUCT INFO AND ALL THE FILTERS THAT ARE SET TO TRUE
export const computers = [
  {
    id: 1,
    productType: 'computer',
    name: 'PC Gaming GRT RGB with Intel® Core™ i5-10400F processor up to 4.30GHz, 16GB DDR4, 1TB HDD, 480GB SSD, GeForce® RTX 2060 6GB GDDR6',
    img: 'api/img/link',
    currentPrice: 1000,
    oldPrice: null,
    discount: 0,
    rating: 4.3,
    reviewsCount: 20,

    specifications: [
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
        showAsFilter: true,
        key: 'Video card type',
        value: 'Dedicated',
      },
      {
        showAsFilter: true,
        key: 'Video card model',
        value: 'GeForce® RTX 2060',
      },
      {
        showAsFilter: true,
        key: 'RAM capacity',
        value: '16 GB',
      },
      {
        showAsFilter: true,
        key: 'SSD capacity',
        value: '128 GB',
      },
      {
        showAsFilter: true,
        key: 'SSD capacity',
        value: '1 TB',
      },
      {
        showAsFilter: true,
        key: 'Processor socket',
        value: 'LGA 1200',
      },
    ],
  },

  // Product 2
  {
    id: 2,
    productType: 'computer',
    name: 'PC Desktop ZTX with Intel® Core™ i7-10700K processor up to 5.10GHz, 32GB DDR4, 2TB HDD, 512GB SSD, GeForce® RTX 3080 10GB GDDR6X',
    img: 'api/img/link',
    currentPrice: 2600,
    oldPrice: 2800,
    discount: 7,
    rating: 3.4,
    reviewsCount: 25,
    specifications: [
      {
        showAsFilter: true,
        key: 'Destined for',
        value: 'Gaming',
      },
      {
        showAsFilter: true,
        key: 'Brand',
        value: 'ZTX',
      },
      {
        showAsFilter: true,
        key: 'Operating system',
        value: 'Windows 10',
      },
      {
        showAsFilter: true,
        key: 'Processor model',
        value: 'Intel® Core™ i7-10700K',
      },
      {
        showAsFilter: true,
        key: 'Processor manufacturer',
        value: 'Intel',
      },
      {
        showAsFilter: true,
        key: 'Video card type',
        value: 'Dedicated',
      },
      {
        showAsFilter: true,
        key: 'Video card model',
        value: 'GeForce® RTX 3080',
      },
      {
        showAsFilter: true,
        key: 'RAM capacity',
        value: '32 GB',
      },
      {
        showAsFilter: true,
        key: 'SSD capacity',
        value: '512 GB',
      },
      {
        showAsFilter: true,
        key: 'HDD capacity',
        value: '2 TB',
      },
      {
        showAsFilter: true,
        key: 'Processor socket',
        value: 'LGA 1200',
      },
    ],
  },

  // PRODUCT 3
  {
    id: 3,
    productType: 'computer',
    name: 'Alienware Aurora R12 Gaming Desktop, Intel Core i7-11700KF, NVIDIA GeForce RTX 3080 10GB GDDR6X, 16GB DDR4 XMP, 1TB SSD',
    img: 'api/img/link',
    currentPrice: 2499,
    oldPrice: null,
    discount: 0,
    rating: 4.9,
    reviewsCount: 15,
    specifications: [
      {
        showAsFilter: true,
        key: 'Destined for',
        value: 'Gaming',
      },
      {
        showAsFilter: true,
        key: 'Brand',
        value: 'Alienware',
      },
      {
        showAsFilter: true,
        key: 'Operating system',
        value: 'Windows',
      },
      {
        showAsFilter: true,
        key: 'Processor model',
        value: 'Intel Core i7-11700KF',
      },
      {
        showAsFilter: true,
        key: 'Processor manufacturer',
        value: 'Intel',
      },
      {
        showAsFilter: true,
        key: 'Video card type',
        value: 'Dedicated',
      },
      {
        showAsFilter: true,
        key: 'Video card model',
        value: 'NVIDIA GeForce RTX 3080',
      },
      {
        showAsFilter: true,
        key: 'RAM capacity',
        value: '16 GB',
      },
      {
        showAsFilter: true,
        key: 'SSD capacity',
        value: '1 TB',
      },
      {
        showAsFilter: true,
        key: 'Processor socket',
        value: 'LGA 1200',
      },
    ],
  },

  // PRODUCT 4
  {
    id: 4,
    productType: 'computer',
    name: 'Alienware Aurora R12 Gaming Desktop, Intel Core i7-11700KF, NVIDIA GeForce RTX 3070 8GB GDDR6X, 16GB DDR4 XMP, 1TB SSD',
    img: 'api/img/link',
    currentPrice: 2499,
    oldPrice: null,
    discount: 0,
    rating: 4.9,
    reviewsCount: 15,
    specifications: [
      {
        showAsFilter: true,
        key: 'Destined for',
        value: 'Gaming',
      },
      {
        showAsFilter: true,
        key: 'Brand',
        value: 'Alienware',
      },
      {
        showAsFilter: true,
        key: 'Operating system',
        value: 'Windows',
      },
      {
        showAsFilter: true,
        key: 'Processor model',
        value: 'Intel Core i7-11700KF',
      },
      {
        showAsFilter: true,
        key: 'Processor manufacturer',
        value: 'Intel',
      },
      {
        showAsFilter: true,
        key: 'Video card type',
        value: 'Dedicated',
      },
      {
        showAsFilter: true,
        key: 'Video card model',
        value: 'NVIDIA GeForce RTX 3070',
      },
      {
        showAsFilter: true,
        key: 'RAM capacity',
        value: '16 GB',
      },
      {
        showAsFilter: true,
        key: 'SSD capacity',
        value: '1 TB',
      },
      {
        showAsFilter: true,
        key: 'Processor socket',
        value: 'LGA 1200',
      },
    ],
  },

  // PRODUCT 4
  {
    id: 5,
    productType: 'computer',
    name: 'Alienware Aurora R12 Gaming Desktop, Intel Core i7-10100F, NVIDIA GeForce RTX 3060 8GB GDDR6X, 16GB DDR4 XMP, 1TB SSD',
    img: 'api/img/link',
    currentPrice: 2499,
    oldPrice: null,
    discount: 0,
    rating: 4.2,
    reviewsCount: 15,
    specifications: [
      {
        showAsFilter: true,
        key: 'Destined for',
        value: 'Gaming',
      },
      {
        showAsFilter: true,
        key: 'Brand',
        value: 'Alienware',
      },
      {
        showAsFilter: true,
        key: 'Operating system',
        value: 'Windows',
      },
      {
        showAsFilter: true,
        key: 'Processor model',
        value: 'Intel Core i7-10100F',
      },
      {
        showAsFilter: true,
        key: 'Processor manufacturer',
        value: 'Intel',
      },
      {
        showAsFilter: true,
        key: 'Video card type',
        value: 'Dedicated',
      },
      {
        showAsFilter: true,
        key: 'Video card model',
        value: 'NVIDIA GeForce RTX 3060',
      },
      {
        showAsFilter: true,
        key: 'RAM capacity',
        value: '16 GB',
      },
      {
        showAsFilter: true,
        key: 'SSD capacity',
        value: '1 TB',
      },
      {
        showAsFilter: true,
        key: 'Processor socket',
        value: 'LGA 1200',
      },
    ],
  },

  // Product 6
  {
    id: 6,
    productType: 'computer',
    name: 'PC Desktop ZTX with Intel® Core™ i5-10700K processor up to 5.10GHz, 32GB DDR4, 2TB HDD, 512GB SSD, GeForce® RTX 3050 10GB GDDR6X',
    img: 'api/img/link',
    currentPrice: 2600,
    oldPrice: 2800,
    discount: 7,
    rating: 5,
    reviewsCount: 25,
    specifications: [
      {
        showAsFilter: true,
        key: 'Destined for',
        value: 'Gaming',
      },
      {
        showAsFilter: true,
        key: 'Brand',
        value: 'ZTX',
      },
      {
        showAsFilter: true,
        key: 'Operating system',
        value: 'Windows 10',
      },
      {
        showAsFilter: true,
        key: 'Processor model',
        value: 'Intel® Core™ i5-10700K',
      },
      {
        showAsFilter: true,
        key: 'Processor manufacturer',
        value: 'Intel',
      },
      {
        showAsFilter: true,
        key: 'Video card type',
        value: 'Dedicated',
      },
      {
        showAsFilter: true,
        key: 'Video card model',
        value: 'GeForce® RTX 3050',
      },
      {
        showAsFilter: true,
        key: 'RAM capacity',
        value: '32 GB',
      },
      {
        showAsFilter: true,
        key: 'SSD capacity',
        value: '512 GB',
      },
      {
        showAsFilter: true,
        key: 'HDD capacity',
        value: '2 TB',
      },
      {
        showAsFilter: true,
        key: 'Processor socket',
        value: 'LGA 1200',
      },
    ],
  },

  // Product 7
  {
    id: 7,
    productType: 'computer',
    name: 'PC Desktop ZTX with Intel® Core™ i5-10700K processor up to 5.10GHz, 32GB DDR4, 2TB HDD, 512GB SSD, GeForce® RTX 3040 10GB GDDR6X',
    img: 'api/img/link',
    currentPrice: 2600,
    oldPrice: 2800,
    discount: 7,
    rating: 2.5,
    reviewsCount: 25,
    specifications: [
      {
        showAsFilter: true,
        key: 'Destined for',
        value: 'Gaming',
      },
      {
        showAsFilter: true,
        key: 'Brand',
        value: 'ZTX',
      },
      {
        showAsFilter: true,
        key: 'Operating system',
        value: 'Windows 10',
      },
      {
        showAsFilter: true,
        key: 'Processor model',
        value: 'Intel® Core™ i5-10700K',
      },
      {
        showAsFilter: true,
        key: 'Processor manufacturer',
        value: 'Intel',
      },
      {
        showAsFilter: true,
        key: 'Video card type',
        value: 'Dedicated',
      },
      {
        showAsFilter: true,
        key: 'Video card model',
        value: 'GeForce® RTX 3040',
      },
      {
        showAsFilter: true,
        key: 'RAM capacity',
        value: '32 GB',
      },
      {
        showAsFilter: true,
        key: 'SSD capacity',
        value: '512 GB',
      },
      {
        showAsFilter: true,
        key: 'HDD capacity',
        value: '2 TB',
      },
      {
        showAsFilter: true,
        key: 'Processor socket',
        value: 'LGA 1200',
      },
    ],
  },

  // Product 8
  {
    id: 8,
    productType: 'computer',
    name: 'PC Desktop ZTX with Intel® Core™ i5-10700K processor up to 5.10GHz, 32GB DDR4, 2TB HDD, 512GB SSD, GeForce® RTX 3090 10GB GDDR6X',
    img: 'api/img/link',
    currentPrice: 2600,
    oldPrice: 2800,
    discount: 7,
    rating: 4.9,
    reviewsCount: 25,
    specifications: [
      {
        showAsFilter: true,
        key: 'Destined for',
        value: 'Gaming',
      },
      {
        showAsFilter: true,
        key: 'Brand',
        value: 'ZTX',
      },
      {
        showAsFilter: true,
        key: 'Operating system',
        value: 'Windows 10',
      },
      {
        showAsFilter: true,
        key: 'Processor model',
        value: 'Intel® Core™ i5-10700K',
      },
      {
        showAsFilter: true,
        key: 'Processor manufacturer',
        value: 'Intel',
      },
      {
        showAsFilter: true,
        key: 'Video card type',
        value: 'Dedicated',
      },
      {
        showAsFilter: true,
        key: 'Video card model',
        value: 'GeForce® RTX 3090',
      },
      {
        showAsFilter: true,
        key: 'RAM capacity',
        value: '32 GB',
      },
      {
        showAsFilter: true,
        key: 'SSD capacity',
        value: '512 GB',
      },
      {
        showAsFilter: true,
        key: 'HDD capacity',
        value: '2 TB',
      },
      {
        showAsFilter: true,
        key: 'Processor socket',
        value: 'LGA 1200',
      },
    ],
  },
];
