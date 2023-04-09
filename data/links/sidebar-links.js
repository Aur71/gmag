export const sidebarLinks = [
  {
    id: 1,
    linkType: 'normal',
    textContent: 'Computers',
    path: '/products/computers',
  },
  {
    id: 2,
    linkType: 'nested',
    textContent: 'Components',
    links: [
      {
        id: 2.1,
        linkType: 'normal',
        textContent: 'Graphic cards',
        path: '/products/gpus',
      },
      {
        id: 2.1,
        linkType: 'normal',
        textContent: 'Processors',
        path: '/products/processors',
      },
      {
        id: 2.1,
        linkType: 'nested',
        textContent: 'More',
        links: [],
      },
    ],
  },
  {
    id: 3,
    linkType: 'normal',
    textContent: 'Laptops',
    path: '/products/laptops',
  },
  {
    id: 4,
    linkType: 'normal',
    textContent: 'Phones',
    path: '/products/phones',
  },
  {
    id: 5,
    linkType: 'normal',
    textContent: 'Monitors',
    path: '/products/monitors',
  },
  {
    id: 6,
    linkType: 'normal',
    textContent: 'TV',
    path: '/products/tv',
  },
  {
    id: 7,
    linkType: 'normal',
    textContent: 'Headphones',
    path: '/products/headphones',
  },
  {
    id: 8,
    linkType: 'normal',
    textContent: 'Keybaords',
    path: '/products/keybaords',
  },
  {
    id: 9,
    linkType: 'normal',
    textContent: 'Mouses',
    path: '/products/mouses',
  },
];
