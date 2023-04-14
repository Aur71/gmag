import { useSelector, useDispatch } from 'react-redux';
import styles from './ListActions.module.scss';
import {
  handleEditListForm,
  handleDeleteForm,
} from '@/redux/reducers/favoritesSlice';

const ListActions = () => {
  const dispatch = useDispatch();
  const { activeListName, lists } = useSelector((state) => state.favorites);
  const currentList = lists.find((list) => list.listName === activeListName);

  return (
    <div className={styles.list_actions}>
      <h3>
        {activeListName}{' '}
        <span>
          ({currentList.products.length}{' '}
          {currentList.products.length === 1 ? 'product' : 'products'})
        </span>
      </h3>

      {activeListName !== 'All products' && activeListName !== 'Favorite' ? (
        <div className={styles.btns_container}>
          <button onClick={() => dispatch(handleEditListForm(true))}>
            Edit
          </button>
          <button onClick={() => dispatch(handleDeleteForm(true))}>
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ListActions;
