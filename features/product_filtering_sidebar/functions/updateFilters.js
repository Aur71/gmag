import filterProducts from './filterProducts';
import getFilters from './get_filters/getFilters';
import sortFilters from './sortFilters';

// when you remove a filter that was used before other filters that filter is still active in activeFitlers slice and that creates bugs.
export default function updateFilters(products, activeFilters) {
  const filters = [...activeFilters];
  const updatedFilters = [];

  filters.forEach((activeFilter, index) => {
    if (index === 0) {
      const initialFilter = getFilters(products).find(
        (filter) => filter.filterName === activeFilter.filterName
      );
      updatedFilters.push(initialFilter);
    }

    if (index !== 0) {
      const currentProducts = filterProducts(
        products,
        activeFilters.slice(0, index)
      );
      const currentFilters = getFilters(currentProducts);
      const currentFilter = currentFilters.find(
        (filter) => filter.filterName === activeFilter.filterName
      );
      updatedFilters.push(currentFilter);
    }

    if (index === activeFilters.length - 1) {
      const filteredProducts = filterProducts(products, activeFilters);
      const currentFilters = getFilters(filteredProducts);
      currentFilters.forEach((filter) => {
        const isFilterInUpdated = updatedFilters.some(
          (updatedFilter) => updatedFilter.filterName === filter.filterName
        );
        if (!isFilterInUpdated) updatedFilters.push(filter);
      });
    }
  });
  return sortFilters(updatedFilters);
}
