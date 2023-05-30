import { useDispatch, useSelector } from 'react-redux';
import styles from './RemoveBtn.module.scss';
import { VscTrash } from 'react-icons/vsc';
import { removeProductFromFavorites } from '@/redux/reducers/favoritesSlice';

const RemoveBtn = ({ product, currentProductList }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.favorites);

  return (
    <button
      className={styles.remove_btn}
      onClick={() =>
        dispatch(
          removeProductFromFavorites({
            productId: product._id,
            listId: currentProductList._id,
          })
        )
      }
      disabled={loading}
    >
      <VscTrash className={styles.icon} />
      <span>remove</span>
    </button>
  );
};

export default RemoveBtn;
