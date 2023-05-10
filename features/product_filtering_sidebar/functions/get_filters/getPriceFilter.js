export default function getPriceFilter(products) {
  let firstProductPrice = products[0]?.currentPrice;
  if (!firstProductPrice) firstProductPrice = 0;

  let min = firstProductPrice;
  let max = firstProductPrice;

  products.forEach((product) => {
    let price = product.currentPrice;
    if (!price) price = 0;
    if (price < min) min = price;
    if (price > max) max = price;
  });

  const priceFilter = {
    filterName: 'Price',
    options: { min, max },
  };

  return priceFilter;
}
