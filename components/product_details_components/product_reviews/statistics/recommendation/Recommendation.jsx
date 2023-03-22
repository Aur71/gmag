import styles from './Recommendation.module.scss';

const Recommendation = ({ reviewsCount, starsCount }) => {
  const percent = ((starsCount[4] + starsCount[5]) / reviewsCount) * 100;

  return (
    <div className={styles.recommendation}>
      <h3>{percent}%</h3>
      <p>recommend this product</p>
    </div>
  );
};

export default Recommendation;
