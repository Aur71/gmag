import styles from './SlideRightBtn.module.scss';
import { AiOutlineRight } from 'react-icons/ai';

const SlideRightBtn = ({ slideRight }) => {
  return (
    <button className={styles.slide_right_btn} onClick={slideRight}>
      <AiOutlineRight />
    </button>
  );
};

export default SlideRightBtn;
