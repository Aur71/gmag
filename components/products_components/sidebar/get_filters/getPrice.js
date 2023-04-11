export default function getPrice(list) {
  // GETS THE THE LOWEST AND BIGGEST PRICE FROM AN ARRAY OF PRODUCTS
  let firstItemPrice = list[0]?.currentPrice;
  if (!firstItemPrice) firstItemPrice = 0;

  let min = firstItemPrice;
  let max = firstItemPrice;

  list.forEach((item) => {
    let price = item.currentPrice;
    if (!price) price = 0;

    if (price < min) {
      min = price;
    }

    if (price > max) {
      max = price;
    }

    return;
  });

  return { name: 'Price', options: { min, max } };
}
