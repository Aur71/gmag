import Header from './header/Header';
import Options from './options/Options';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ProductShare.module.scss';
import { handleShowShare } from '@/redux/reducers/singleProductSlice';

const ProductShare = () => {
  const dispatch = useDispatch();
  const { showShare } = useSelector((state) => state.singleProduct);

  const closeShare = (e) => {
    if (e.target.classList[0] === 'ProductShare_product_share__3iWW1') {
      dispatch(handleShowShare(false));
      return;
    }
  };

  return (
    <section
      className={`${styles.product_share} ${showShare && styles.active}`}
      onClick={closeShare}
    >
      <div className={styles.container}>
        <Header />
        <Options />
      </div>
    </section>
  );
};

export default ProductShare;
