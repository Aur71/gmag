import { useDispatch } from 'react-redux';
import styles from './ActiveSpecificationFilter.module.scss';
import { IoIosClose } from 'react-icons/io';
import { removeSpecificationFilter } from '@/redux/reducers/productFilteringSidebarSlice';

const ActiveSpecificationFilter = ({ activeFilter }) => {
  const dispatch = useDispatch();
  const { filterName, options } = activeFilter;

  const dispatchAction = (option) => {
    dispatch(
      removeSpecificationFilter({
        optionName: option,
        filterName,
      })
    );
  };

  return (
    <div className={styles.active_specification_filter}>
      <h4>{filterName}</h4>

      <ul>
        {options.map((option) => {
          return (
            <li key={option}>
              <button onClick={() => dispatchAction(option)}>
                {option} <IoIosClose className={styles.icon} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ActiveSpecificationFilter;
