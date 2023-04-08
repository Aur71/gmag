import styles from './SlideLeftBtn.module.scss';
import { AiOutlineLeft } from 'react-icons/ai';

const SlideLeftBtn = ({ slideLeft }) => {
  return (
    <button className={styles.slide_left_btn} onClick={slideLeft}>
      <AiOutlineLeft />
    </button>
  );
};

export default SlideLeftBtn;
