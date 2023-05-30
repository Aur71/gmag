import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './Dropdown.module.scss';
import { BiChevronDown } from 'react-icons/bi';

const Dropdown = ({ product }) => {
  const { _id } = product;
  const { lists } = useSelector((state) => state.favorites);
  const [showDropdown, setShowDropdown] = useState(false);
  const optionsRef = useRef(null);

  const currentProductList = lists.find((list) => {
    if (list.name === lists[0].name) return;
    const { products } = list;
    return products.find((product) => product._id === _id);
  });

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

  return (
    <div className={styles.dropdown}>
      <h5>
        List: <span>{currentProductList?.name}</span>
      </h5>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        move <BiChevronDown className={styles.icon} />
      </button>

      <div
        className={`${styles.options} ${showDropdown ? styles.active : null}`}
      >
        {lists.map((list) => {
          const { name } = list;
          if (name === lists[0].name) return null;
          return (
            <button
              key={list._id}
              ref={optionsRef}
              className={
                currentProductList?.name === name ? styles.active : null
              }
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
