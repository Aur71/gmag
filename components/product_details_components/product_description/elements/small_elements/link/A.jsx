import styles from './A.module.scss';

const A = ({ data }) => {
  return (
    <a
      href={data.path}
      target='_blank'
      rel='noreferrer'
      className={styles.default}
      style={data.styles}
    >
      &nbsp;
      {data.content}
      &nbsp;
    </a>
  );
};

export default A;
