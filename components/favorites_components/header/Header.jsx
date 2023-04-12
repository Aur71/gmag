import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { useSelector, useDispatch } from 'react-redux';
import List from './list/List';
import styles from './Header.module.scss';
import { handleAddListForm } from '@/redux/reducers/favoritesSlice';

const Header = () => {
  const listContainerRef = useRef(null);
  const { events } = useDraggable(listContainerRef);
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.favorites);

  return (
    <div className={styles.header}>
      <div>
        <h1>Favorites</h1>
        <button onClick={() => dispatch(handleAddListForm(true))}>
          Add list
        </button>
      </div>

      <div
        className={styles.lists_container}
        ref={listContainerRef}
        {...events}
      >
        {lists.map((list) => {
          return <List key={list.listName} list={list} />;
        })}
      </div>
    </div>
  );
};

export default Header;
