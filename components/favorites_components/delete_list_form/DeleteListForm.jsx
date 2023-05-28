import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './DeleteListForm.module.scss';
import { VscChromeClose } from 'react-icons/vsc';
import {
  closeDeleteListForm,
  deleteList,
} from '@/redux/reducers/favoritesSlice';

const DeleteListForm = () => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const { showDeleteListForm, activeListName, loading } = useSelector(
    (state) => state.favorites
  );

  const clickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target))
      dispatch(closeDeleteListForm());
  };

  const dispatchAction = () => {
    dispatch(deleteList());
    dispatch(closeDeleteListForm());
  };

  return (
    <div
      className={`${styles.delete_list_form} ${
        showDeleteListForm && styles.active
      }`}
      onClick={clickOutside}
    >
      <div className={styles.container} ref={containerRef}>
        <div className={styles.header}>
          <h3>Delete list</h3>
          <button onClick={() => dispatch(closeDeleteListForm())}>
            <VscChromeClose />
          </button>
        </div>

        <h4>
          You are about to delete <span>{activeListName}</span>. All products in
          this list will be deleted. This action is irreversible.
        </h4>

        <div className={styles.btns_container}>
          <button onClick={dispatchAction} disabled={loading}>
            Delete
          </button>
          <button onClick={() => dispatch(closeDeleteListForm())}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteListForm;
