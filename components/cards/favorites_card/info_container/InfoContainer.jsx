import { useSelector } from 'react-redux';
import TitleContainer from './title_container/TitleContainer';
import PriceContainer from './price_container/PriceContainer';
import styles from './InfoContainer.module.scss';

const InfoContainer = ({ product }) => {
  const { _id } = product;
  const { lists } = useSelector((state) => state.favorites);

  const currentProductList = lists.find((list) => {
    if (list.name === lists[0].name) return;
    const { products } = list;
    return products.find((product) => product._id === _id);
  });

  return (
    <div className={styles.info_container}>
      <TitleContainer
        product={product}
        currentProductList={currentProductList}
      />
      <PriceContainer
        product={product}
        currentProductList={currentProductList}
      />
    </div>
  );
};

export default InfoContainer;
