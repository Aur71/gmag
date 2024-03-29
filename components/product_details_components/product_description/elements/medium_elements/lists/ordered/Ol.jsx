import styles from './Ol.module.scss';

const Ol = ({ data }) => {
  return (
    <ol className={styles.default} style={data?.styles}>
      {data?.content?.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ol>
  );
};

export default Ol;
