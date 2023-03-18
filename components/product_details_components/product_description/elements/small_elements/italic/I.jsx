import styles from './I.module.scss';

const I = ({ data }) => {
  return (
    <i className={styles.default} style={data.styles}>
      &nbsp;
      {data.content}
      &nbsp;
    </i>
  );
};

export default I;
