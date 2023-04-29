import { useState } from 'react';
import Rating from './rating/Rating';
import Colors from './colors/Colors';
import Price from './price/Price';
import Actions from './actions/Actions';
import styles from './Info.module.scss';

const Info = ({ product }) => {
  const [activeColor, setActiveColor] = useState(product.colors[0]);

  return (
    <div className={styles.info}>
      <h1>{product.name}</h1>
      <Rating rating={product.rating} reviewsCount={product.reviewsCount} />
      <Colors
        colors={product.colors}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />
      <Price
        currentPrice={product.currentPrice}
        oldPrice={product.oldPrice}
        activeColor={activeColor}
      />
      <Actions product={product} />
    </div>
  );
};

export default Info;
