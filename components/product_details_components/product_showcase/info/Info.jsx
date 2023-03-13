import Rating from './rating/Rating';
import Colors from './colors/Colors';
import Price from './price/Price';
import Actions from './actions/Actions';
import styles from './Info.module.scss';

const Info = () => {
  return (
    <div className={styles.info}>
      <h1>
        PC Gaming GRT RGB with Intel® Core™ i5-10400F processor up to 4.30GHz,
        16GB DDR4, 1TB HDD, 480GB SSD, GeForce® RTX 2060 6GB GDDR6
      </h1>
      <Rating />
      <Colors />
      <Price />
      <Actions />
    </div>
  );
};

export default Info;
