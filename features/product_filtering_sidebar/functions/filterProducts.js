import filterProductsByPrice from './filter_products/filterProductsByPrice';
import filterProductsByRating from './filter_products/filterProductsByRating';
import filterProductsBySpecification from './filter_products/filterProductsBySpecification';

export default function filterProducts(products, activeFilters) {
  if (!activeFilters.length) return products;
  let filteredProducts = [...products];

  for (const filter of activeFilters) {
    const { filterName } = filter;

    switch (filterName) {
      case 'Price':
        const filteredByPrice = filterProductsByPrice(filteredProducts, filter);
        filteredProducts = filteredByPrice;
        break;
      case 'Rating':
        const filteredByRating = filterProductsByRating(
          filteredProducts,
          filter
        );
        filteredProducts = filteredByRating;
        break;
      default:
        const filteredBySpecification = filterProductsBySpecification(
          filteredProducts,
          filter
        );
        filteredProducts = filteredBySpecification;
        break;
    }
  }

  return filteredProducts;
}
