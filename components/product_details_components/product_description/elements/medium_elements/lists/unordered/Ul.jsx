import styles from './Ul.module.scss';

const Ul = ({ data }) => {
  return (
    <ul className={styles.default} style={data?.styles}>
      {data?.content?.map((item) => {
        return <li key={item._id}>{item}</li>;
      })}
    </ul>
  );
};

export default Ul;
