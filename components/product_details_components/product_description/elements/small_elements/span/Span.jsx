import styles from './Span.module.scss';

const Span = ({ data }) => {
  return (
    <span className={styles.default} style={data.styles}>
      &nbsp;
      {data.content}
      &nbsp;
    </span>
  );
};

export default Span;
