import { useSelector, useDispatch } from 'react-redux';
import styles from './List.module.scss';
import { handleActiveListName } from '@/redux/reducers/favoritesSlice';

const List = ({ list }) => {
  const dispatch = useDispatch();
  const { name, products } = list;
  const { activeListName, mainList } = useSelector((state) => state.favorites);

  return (
    <div
      className={styles.list}
      onClick={() => dispatch(handleActiveListName(name))}
    >
      <div
        className={`${styles.bar} ${activeListName === name && styles.active}`}
      ></div>

      <h2 className={`${mainList === name && styles.active}`}>{name}</h2>
      <h3>
        {products.length} {products.length === 1 ? 'product' : 'products'}
      </h3>
    </div>
  );
};

export default List;
