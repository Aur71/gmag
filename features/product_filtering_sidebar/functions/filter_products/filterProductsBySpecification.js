export default function filterProductsBySpecification(products, filter) {
  const { filterName, options } = filter;
  const filteredBySpecification = products.filter((product) => {
    const { specifications } = product;
    const productSpecification = specifications.find(
      (specification) => specification.key === filterName
    );
    if (!productSpecification) return false;
    return options.some((option) => option === productSpecification.value);
  });
  return filteredBySpecification;
}
