import styles from './TextContainer.module.scss';

const TextContainer = () => {
  return (
    <div className={styles.text_container}>
      <h2>
        Subscribe to the GMAG newsletter and find out about the limited-time
        discounts!
      </h2>

      <h3>
        By subscribing to the eMAG newsletter, I confirm that I am over 16 years
        old.
      </h3>
    </div>
  );
};

export default TextContainer;
