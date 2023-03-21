import Row from './row/Row';
import styles from './Block.module.scss';

const Block = ({ item }) => {
  return (
    <div className={styles.block}>
      <h3>{item?.category}</h3>

      {item?.specs?.map((spec) => {
        const key = `row_${spec.key}_${spec.value}`;

        return <Row key={key} spec={spec} />;
      })}
    </div>
  );
};

export default Block;
