import { useDispatch } from 'react-redux';
import styles from './Actions.module.scss';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiMinus, BiReset } from 'react-icons/bi';
import {
  increaseZoom,
  decreaseZoom,
  resetZoom,
} from '@/redux/reducers/imageViewer';

const Actions = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.actions}>
      <button onClick={() => dispatch(increaseZoom())}>
        <AiOutlinePlus />
      </button>

      <button onClick={() => dispatch(decreaseZoom())}>
        <BiMinus />
      </button>

      <button onClick={() => dispatch(resetZoom())}>
        <BiReset />
      </button>
    </div>
  );
};

export default Actions;
