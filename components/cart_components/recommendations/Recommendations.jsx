import Slider from './slider/Slider';
import styles from './Recommendations.module.scss';

const Recommendations = () => {
  return (
    <div className={styles.recommendations}>
      <h2>Recommended</h2>
      <Slider />
    </div>
  );
};

export default Recommendations;
