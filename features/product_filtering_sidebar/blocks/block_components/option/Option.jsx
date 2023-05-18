import { useDispatch } from 'react-redux';
import styles from './Option.module.scss';
import {
  addSpecificationFilter,
  removeSpecificationFilter,
} from '@/redux/reducers/productFilteringSidebarSlice';

const Option = ({ option, filter }) => {
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

  return (
    <label className={styles.option}>
      <input type='checkbox' onChange={handleCheckbox} id={checkboxId} />
      {optionName} <span>({count})</span>
    </label>
  );
};

export default Option;
