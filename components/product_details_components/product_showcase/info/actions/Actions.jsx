// import { useDispatch } from 'react-redux';
import styles from './Actions.module.scss';
// import { addProduct } from '@/redux/reducers/favoritesSlice';

const Actions = ({ data }) => {
  const { totalStock } = data;
  // const dispatch = useDispatch();
  // const product = {
  //   currentPrice,
  //   oldPrice,
  //   img,
  //   name,
  //   reviewsCount,
  //   rating,
  //   productType,
  //   discount,
  //   id,
  // };

  return (
    <div className={styles.actions}>
      <button
        className={`${styles.cart_btn} ${!totalStock && styles.disabled}`}
        // When cliked if totalStock === 0 add a notification
      >
        Add to cart
      </button>
      <button
        className={styles.favorite_btn}
        // onClick={() => dispatch(addProduct(product))}
      >
        Add to favorite
      </button>
    </div>
  );
};

export default Actions;
