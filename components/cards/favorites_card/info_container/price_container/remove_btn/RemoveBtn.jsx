import styles from './RemoveBtn.module.scss';
import { VscTrash } from 'react-icons/vsc';

const RemoveBtn = () => {
  return (
    <button className={styles.remove_btn}>
      <VscTrash className={styles.icon} />
      remove
    </button>
  );
};

export default RemoveBtn;
