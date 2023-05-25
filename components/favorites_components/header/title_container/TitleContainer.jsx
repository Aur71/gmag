import { useDispatch, useSelector } from 'react-redux';
import styles from './TitleContainer.module.scss';
import { openAddListForm } from '@/redux/reducers/favoritesSlice';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const TitleContainer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const dispatchAction = () => {
    if (!user) {
      dispatch(
        addNotification({ type: 'error', message: 'You must be logged in' })
      );
      return;
    }
    dispatch(openAddListForm());
  };

  return (
    <div className={styles.title_container}>
      <h1>Favorites</h1>
      <button onClick={dispatchAction}>Add list</button>
    </div>
  );
};

export default TitleContainer;
