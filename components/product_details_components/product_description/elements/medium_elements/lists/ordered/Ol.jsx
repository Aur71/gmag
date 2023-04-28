import styles from './Ol.module.scss';

const Ol = ({ data }) => {
  return (
    <ol className={styles.default} style={data?.styles}>
      {data?.content?.map((item) => {
        return <li key={item._id}>{item}</li>;
      })}
    </ol>
  );
};

export default Ol;
