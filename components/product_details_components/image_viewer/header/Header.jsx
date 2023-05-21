import { useDispatch } from 'react-redux';
import styles from './Header.module.scss';
import { MdClose } from 'react-icons/md';
import { closeImageViewer } from '@/redux/reducers/imageViewer';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.header}>
      <button onClick={() => dispatch(closeImageViewer())}>
        <MdClose />
      </button>
    </div>
  );
};

export default Header;
