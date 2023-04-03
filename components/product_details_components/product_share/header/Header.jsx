import { useDispatch } from 'react-redux';
import styles from './Header.module.scss';
import { MdClose } from 'react-icons/md';
import { handleShowShare } from '@/redux/reducers/singleProductSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <h4>Share</h4>

      <button onClick={() => dispatch(handleShowShare(false))}>
        <MdClose />
      </button>
    </div>
  );
};

export default Header;
