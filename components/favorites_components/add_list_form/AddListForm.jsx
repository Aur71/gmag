import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './AddListForm.module.scss';
import { VscChromeClose } from 'react-icons/vsc';
import {
  addList,
  handleMainList,
  handleAddListForm,
} from '@/redux/reducers/favoritesSlice';

const AddListForm = () => {
  const [listName, setListName] = useState('');
  const [error, setError] = useState('');
  const containerRef = useRef(null);
  const checkboxRef = useRef(null);
  const dispatch = useDispatch();
  const { showAddListForm, lists } = useSelector((state) => state.favorites);

  const clickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target))
      dispatch(handleAddListForm(false));
  };

  const checkListName = () => {
    if (!listName) {
      setError(`can't be empty`);
      return false;
    }
    const isNameAlreadyUsed = lists.some((list) => list.listName === listName);
    if (isNameAlreadyUsed) {
      setError('name already used');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isListNameValid = checkListName();
    if (!isListNameValid) return;
    dispatch(addList(listName));
    if (checkboxRef.current.checked) dispatch(handleMainList(listName));
    dispatch(handleAddListForm(false));
    setListName('');
    checkboxRef.current.checked = false;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError('');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <div
      className={`${styles.add_list_form} ${showAddListForm && styles.active}`}
      onClick={clickOutside}
    >
      <div className={styles.container} ref={containerRef}>
        <div className={styles.header}>
          <h3>Add a new list</h3>
          <button onClick={() => dispatch(handleAddListForm(false))}>
            <VscChromeClose />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor='list name'>
            List name: <span>{error}</span>
          </label>
          <input
            type='text'
            name='list name'
            placeholder='Your list name'
            value={listName}
            onChange={(e) => setListName(e.target.value)}
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
