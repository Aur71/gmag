import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './AddListForm.module.scss';
import { VscChromeClose } from 'react-icons/vsc';
import { closeAddListForm } from '@/redux/reducers/favoritesSlice';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const AddListForm = () => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const checkboxRef = useRef(null);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { showAddListForm, lists } = useSelector((state) => state.favorites);
  const { user } = useSelector((state) => state.user);

  const clickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target))
      dispatch(closeAddListForm());
  };

  const checkName = () => {
    if (!name) return setError("can't be empty");
    const isNameUsed = lists.some(
      (list) => list.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameUsed) return setError('name is used');
    setError('');
  };

  const submitForm = (e) => {
    e.preventDefault();
    checkName();
    if (error) return;
    if (!user) {
      dispatch(
        addNotification({ type: 'error', message: 'You must be logged in' })
      );
      return;
    }
  };

  return (
    <div
      className={`${styles.add_list_form} ${showAddListForm && styles.active}`}
      onClick={clickOutside}
    >
      <div className={styles.container} ref={containerRef}>
        <div className={styles.header}>
          <h3>Add a new list</h3>
          <button onClick={() => dispatch(closeAddListForm())}>
            <VscChromeClose />
          </button>
        </div>

        <form onSubmit={submitForm}>
          <label htmlFor='list name'>
            List name: <span>{error}</span>
          </label>
          <input
            type='text'
            name='list name'
            placeholder='Your list name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className={styles.checkbox_wrapper}>
            <input type='checkbox' name='main list' ref={checkboxRef} />
            <label htmlFor='main list'>Use as main list</label>
          </div>
          <p>
            The products you add to Favorites will be saved here by default. You
            can change the main list at any time.
          </p>

          <button type='submit'>Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddListForm;
