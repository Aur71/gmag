import styles from './Recommendation.module.scss';

const Recommendation = ({ reviewsData, reviewsCount }) => {
  const percent =
    ((reviewsData[3].count + reviewsData[4].count) / reviewsCount) * 100;

  return (
    <div className={styles.recommendation}>
      <h3>{percent}%</h3>
      <p>recommend this product</p>
    </div>
  );
};

export default Recommendation;
