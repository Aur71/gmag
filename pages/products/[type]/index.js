import React from 'react';

const ProductType = ({ productData }) => {
  console.log(productData);

  return (
    <div>
      Product filters based on the product type & Product list <br />
      also pagination
    </div>
  );
};

ProductType.getInitialProps = async ({ query }) => {
  const { type } = query;
  const productData = [type];
  //   const productData = await fetchProductData(type);
  return { productData };
};

export default ProductType;
