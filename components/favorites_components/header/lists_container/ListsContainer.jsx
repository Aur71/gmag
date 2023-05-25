import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { useSelector } from 'react-redux';
import List from './list/List';
import styles from './ListsContainer.module.scss';

const ListsContainer = () => {
  const listContainerRef = useRef(null);
  const { events } = useDraggable(listContainerRef);
  const { lists } = useSelector((state) => state.favorites);

  return (
    <div className={styles.lists_container} ref={listContainerRef} {...events}>
      {lists.map((list) => {
        return <List key={list._id} list={list} />;
      })}
    </div>
  );
};

export default ListsContainer;
