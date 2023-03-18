import Li from '../list_item/Li';
import styles from './Ol.module.scss';

const Ol = () => {
  return (
    <ol className={styles.default}>
      <Li />
      <Li />
      <Li />
    </ol>
  );
};

export default Ol;
