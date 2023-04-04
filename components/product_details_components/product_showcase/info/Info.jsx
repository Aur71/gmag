import Rating from './rating/Rating';
import Colors from './colors/Colors';
import Price from './price/Price';
import Actions from './actions/Actions';
import styles from './Info.module.scss';

const Info = ({ data }) => {
  return (
    <div className={styles.info}>
      <h1>{data.name}</h1>
      <Rating rating={data.rating} reviewsCount={data.reviewsCount} />
      <Colors colors={data.colors} />
      <Price
        currentPrice={data.currentPrice}
        oldPrice={data.oldPrice}
        totalStock={data.totalStock}
      />
      <Actions
        productType={data.productType}
        id={data.id}
        totalStock={data.totalStock}
      />
    </div>
  );
};

export default Info;
