import TitleContainer from './title_container/TitleContainer';
import PriceContainer from './price_container/PriceContainer';
import styles from './InfoContainer.module.scss';

const InfoContainer = ({ product }) => {
  return (
    <div className={styles.info_container}>
      <TitleContainer product={product} />
      <PriceContainer product={product} />
    </div>
  );
};

export default InfoContainer;
