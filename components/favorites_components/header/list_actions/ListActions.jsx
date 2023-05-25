import { useSelector, useDispatch } from 'react-redux';
import styles from './ListActions.module.scss';
import {
  openEditListForm,
  openDeleteListForm,
} from '@/redux/reducers/favoritesSlice';

const ListActions = () => {
  const dispatch = useDispatch();
  const { activeListName, lists } = useSelector((state) => state.favorites);

  return (
    <div className={styles.list_actions}>
      <h3>{activeListName}</h3>

      {activeListName !== lists[0].name && activeListName !== lists[1].name ? (
        <div className={styles.btns_container}>
          <button onClick={() => dispatch(openEditListForm())}>Edit</button>
          <button onClick={() => dispatch(openDeleteListForm())}>Delete</button>
        </div>
      ) : null}
    </div>
  );
};

export default ListActions;
