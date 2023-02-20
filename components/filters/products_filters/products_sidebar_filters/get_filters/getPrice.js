export default function getPrice(list) {
  const firstItemPrice = list[0].currentPrice;

  let min = firstItemPrice;
  let max = firstItemPrice;

  list.forEach((item) => {
    const price = item.currentPrice;

    if (price < min) {
      min = price;
    }

    if (price > max) {
      max = price;
    }

    return;
  });

  return { name: 'price', min, max };
}
