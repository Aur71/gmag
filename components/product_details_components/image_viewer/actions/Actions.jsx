import styles from './Actions.module.scss';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiMinus, BiReset } from 'react-icons/bi';

const Actions = () => {
  return (
    <div className={styles.actions}>
      <button>
        <AiOutlinePlus />
      </button>

      <button>
        <BiMinus />
      </button>

      <button>
        <BiReset />
      </button>
    </div>
  );
};

export default Actions;
