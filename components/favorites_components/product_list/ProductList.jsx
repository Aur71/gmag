import { useSelector } from 'react-redux';
import FavoriteCard from './favorite_card/FavoriteCard';
import styles from './ProductList.module.scss';

const ProductList = () => {
  const { activeListName, lists } = useSelector((state) => state.favorites);
  const currentList = lists.find((list) => list.listName === activeListName);

  return (
    <div className={styles.product_list}>
      {currentList.products.map((product, index) => {
        const key = `${currentList.listName}_${index}`;
        return <FavoriteCard product={product} key={key} />;
      })}
    </div>
  );
};

export default ProductList;
