import { useState } from 'react';
import Title from './title/Title';
import Rating from './rating/Rating';
import Colors from './colors/Colors';
import Price from './price/Price';
import Actions from './actions/Actions';
import styles from './InfoContainer.module.scss';

const InfoContainer = ({ product }) => {
  const [activeColor, setActiveColor] = useState(product.colors[0]);

  return (
    <div className={styles.info_container}>
      <Title product={product} />
      <Rating product={product} />
      <Colors
        product={product}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />
      <Price product={product} activeColor={activeColor} />
      <Actions product={product} />
    </div>
  );
};

export default InfoContainer;
