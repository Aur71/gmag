import { useSelector, useDispatch } from 'react-redux';
import styles from './EditListForm.module.scss';

const EditListForm = () => {
  const dispatch = useDispatch();
  const { mainList, lists, activeList } = useSelector(
    (state) => state.favorites
  );

  return <div className={styles.edit_list_form}>EditListForm</div>;
};

export default EditListForm;
