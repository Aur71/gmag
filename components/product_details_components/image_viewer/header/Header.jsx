import { useDispatch } from 'react-redux';
import styles from './Header.module.scss';
import { MdClose } from 'react-icons/md';
import { handleShowImageViewer } from '@/redux/reducers/singleProductSlice';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.header}>
      <button onClick={() => dispatch(handleShowImageViewer(false))}>
        <MdClose />
      </button>
    </div>
  );
};

export default Header;
