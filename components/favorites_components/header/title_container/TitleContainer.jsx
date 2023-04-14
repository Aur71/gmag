import { useDispatch } from 'react-redux';
import styles from './TitleContainer.module.scss';
import { handleAddListForm } from '@/redux/reducers/favoritesSlice';

const TitleContainer = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.title_container}>
      <h1>Favorites</h1>
      <button onClick={() => dispatch(handleAddListForm(true))}>
        Add list
      </button>
    </div>
  );
};

export default TitleContainer;
