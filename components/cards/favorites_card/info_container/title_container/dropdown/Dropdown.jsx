import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Dropdown.module.scss';
import { BiChevronDown } from 'react-icons/bi';
import { moveProduct } from '@/redux/reducers/favoritesSlice';

const Dropdown = ({ product, currentProductList }) => {
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.favorites);
  const [showDropdown, setShowDropdown] = useState(false);
  const optionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target))
        setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, []);

  const dispatchMoveProduct = (newList) => {
    setShowDropdown(false);
    dispatch(
      moveProduct({
        productId: product._id,
        listId: currentProductList._id,
        newListId: newList._id,
      })
    );
  };

  return (
    <div className={styles.dropdown}>
      <h5>
        <span>List:</span> <span>{currentProductList?.name}</span>
      </h5>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        move <BiChevronDown className={styles.icon} />
      </button>

      <div
        className={`${styles.options} ${showDropdown ? styles.active : null}`}
        ref={optionsRef}
      >
        {lists.map((list) => {
          const { name } = list;
          if (name === lists[0].name) return null;
          return (
            <button
              key={list._id}
              className={
                currentProductList?.name === name ? styles.active : null
              }
              onClick={() => dispatchMoveProduct(list)}
              disabled={list._id === currentProductList._id}
            >
              {list.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
