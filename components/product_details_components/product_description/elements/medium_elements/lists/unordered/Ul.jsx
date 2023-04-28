import styles from './Ul.module.scss';

const Ul = ({ data }) => {
  return (
    <ul className={styles.default} style={data?.styles}>
      {data?.content?.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default Ul;
