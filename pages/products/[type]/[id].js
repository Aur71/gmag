import React from 'react';

const ProductDetails = ({ productData }) => {
  console.log(productData);

  return <div>ProductDetails</div>;
};

ProductDetails.getInitialProps = async ({ query }) => {
  const { id } = query;
  const productData = { id };
  //   const productData = await fetchProductData(id);
  return { productData };
};

export default ProductDetails;
