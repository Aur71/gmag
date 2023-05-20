import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SpecificationOption.module.scss';
import {
  addSpecificationFilter,
  removeSpecificationFilter,
} from '@/redux/reducers/productFilteringSidebarSlice';

const SpecificationOption = ({ option, filter }) => {
  const dispatch = useDispatch();
  const optionName = option.option;
  const { count } = option;
  const { filterName } = filter;

  const handleCheckbox = (e) => {
    if (e.target.checked)
      dispatch(addSpecificationFilter({ optionName, filterName }));
    if (!e.target.checked)
      dispatch(removeSpecificationFilter({ optionName, filterName }));
  };
  const checkboxId = `${filterName} - ${optionName}`;

  useEffect(() => {
    return () => {
      dispatch(removeSpecificationFilter({ optionName, filterName }));
    };
  }, [dispatch]);

  return (
    <div className={styles.specification_option}>
      <input type='checkbox' onChange={handleCheckbox} id={checkboxId} />
      {optionName} <span>({count})</span>
    </div>
  );
};

export default SpecificationOption;
