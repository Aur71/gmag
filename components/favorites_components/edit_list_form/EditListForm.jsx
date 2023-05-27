import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './EditListForm.module.scss';
import { VscChromeClose } from 'react-icons/vsc';
import { closeEditListForm, editList } from '@/redux/reducers/favoritesSlice';

const EditListForm = () => {
  const dispatch = useDispatch();
  const { mainList, lists, activeListName, showEditListForm, loading } =
    useSelector((state) => state.favorites);
  const [name, setName] = useState(activeListName);
  const [useAsMainList, setUseAsMainList] = useState(true);
  const [error, setError] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    if (activeListName === mainList) setUseAsMainList(true);
    else setUseAsMainList(false);
    setName(activeListName);
  }, [activeListName, showEditListForm, mainList]);

  const clickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target))
      dispatch(closeEditListForm());
  };

  const checkListName = () => {
    if (!name) {
      setError(`can't be empty`);
      return false;
    }
    if (name === activeListName) return true;
    const isNameAlreadyUsed = lists.some(
      (list) => list.name.toLowerCase() === name.toLowerCase()
    );
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
    if (isListNameValid) {
      dispatch(editList({ name, useAsMainList }));
      setName('');
      setUseAsMainList(false);
      dispatch(closeEditListForm());
    }
  };

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
          <button onClick={() => dispatch(closeEditListForm())}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className={styles.checkbox_wrapper}>
            <input
              type='checkbox'
              name='main list'
              checked={useAsMainList}
              onChange={(e) => setUseAsMainList(e.target.checked)}
            />
            <label htmlFor='main list'>Use as main list</label>
          </div>
          <p>
            The products you add to Favorites will be saved here by default. You
            can change the main list at any time.
          </p>

          <button type='submit' disabled={loading}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditListForm;
