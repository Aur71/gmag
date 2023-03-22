import Chart from './chart/Chart';
import Rating from './rating/Rating';
import Recommendation from './recommendation/Recommendation';
import styles from './Statistics.module.scss';

const Statistics = ({ reviewsData }) => {
  return (
    <div className={styles.statistics}>
      <Chart
        starsCount={reviewsData.starsCount}
        reviewsCount={reviewsData.reviewsCount}
      />
      <Rating rating={reviewsData.rating} />
      <Recommendation
        starsCount={reviewsData.starsCount}
        reviewsCount={reviewsData.reviewsCount}
      />
    </div>
  );
};

export default Statistics;
