import styles from './B.module.scss';

const B = ({ data }) => {
  return (
    <b className={styles.default} style={data.styles}>
      &nbsp;
      {data.content}
      &nbsp;
    </b>
  );
};

export default B;
