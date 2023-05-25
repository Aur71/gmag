export const sidebarLinks = [
  {
    id: 1,
    linkType: 'normal',
    textContent: 'Computers',
    path: '/products/computers',
  },
  {
    id: 2,
    linkType: 'normal',
    textContent: 'Laptops',
    path: '/products/laptops',
  },
  {
    id: 3,
    linkType: 'normal',
    textContent: 'Monitors',
    path: '/products/monitors',
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
    textContent: 'TV',
    path: '/products/tv',
  },
  {
    id: 6,
    linkType: 'nested',
    textContent: 'Peripherals',
    links: [
      {
        id: 6.1,
        linkType: 'normal',
        textContent: 'Keybaords',
        path: '/products/keybaords',
      },
      {
        id: 2.2,
        linkType: 'normal',
        textContent: 'Mouses',
        path: '/products/mouses',
      },
      {
        id: 6.3,
        linkType: 'normal',
        textContent: 'Headphones',
        path: '/products/headphones',
      },
    ],
  },
];
