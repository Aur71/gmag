import RecommendationsSlider from '@/features/recommendations_slider/RecommendationsSlider';
import styles from './Recommendations.module.scss';

// temp data
import { computers } from '@/data/temporary/computers';

const Recommendations = () => {
  return (
    <div className={styles.recommendations}>
      <h2>Recommended</h2>
      <RecommendationsSlider products={computers} />
    </div>
  );
};

export default Recommendations;
