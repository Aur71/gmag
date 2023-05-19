import { useDispatch } from 'react-redux';
import styles from './CloseSidebarBlock.module.scss';
import { TfiClose } from 'react-icons/tfi';
import { closeProductFilteringSidebar } from '@/redux/reducers/productFilteringSidebarSlice';

const CloseSidebarBlock = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.close_sidebar_block}>
      <h4>Filters</h4>
      <button onClick={() => dispatch(closeProductFilteringSidebar())}>
        <TfiClose />
      </button>
    </div>
  );
};

export default CloseSidebarBlock;
