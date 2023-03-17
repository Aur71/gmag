import Li from '../list_item/Li';
import styles from './Ul.module.scss';

const Ul = () => {
  return (
    <ul className={styles.default}>
      <Li />
      <Li />
      <Li />
    </ul>
  );
};

export default Ul;
