import { useSelector } from 'react-redux';
import styles from './CustomError.module.scss';

const CustomError = () => {
  const { error } = useSelector((state) => state.favorites);

  return (
    <div className={styles.custom_error}>
      <h1>Error: {error}</h1>
    </div>
  );
};

export default CustomError;
