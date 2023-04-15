import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './EditListForm.module.scss';
import { VscChromeClose } from 'react-icons/vsc';
import {
  handleEditListForm,
  editList,
  handleMainList,
} from '@/redux/reducers/favoritesSlice';

const EditListForm = () => {
  const dispatch = useDispatch();
  const { mainList, lists, activeListName, showEditListForm } = useSelector(
    (state) => state.favorites
  );
  const [listName, setListName] = useState(activeListName);
  const [error, setError] = useState('');
  const containerRef = useRef(null);
  const checkboxRef = useRef(null);

  useEffect(() => {
    setListName(activeListName);
  }, [activeListName, showEditListForm]);

  const clickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target))
      dispatch(handleEditListForm(false));
  };

  const checkListName = () => {
    if (!listName) {
      setError(`can't be empty`);
      return false;
    }
    if (listName === activeListName) return true;
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
    if (listName === mainList && !checkboxRef.current.checked)
      dispatch(handleMainList('Favorite'));
    dispatch(editList(listName));
    if (checkboxRef.current.checked) dispatch(handleMainList(listName));
    dispatch(handleEditListForm(false));
    setListName('');
    checkboxRef.current.checked = false;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError('');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [error]);

  useEffect(() => {
    if (activeListName === mainList) checkboxRef.current.checked = true;
    else checkboxRef.current.checked = false;
  }, [activeListName, showEditListForm, mainList]);

  return (
    <div
      className={`${styles.edit_list_form} ${
        showEditListForm && styles.active
      }`}
      onClick={clickOutside}
    >
      <div className={styles.container} ref={containerRef}>
        <div className={styles.header}>
          <h3>Edit list</h3>
          <button onClick={() => dispatch(handleEditListForm(false))}>
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

export default EditListForm;
