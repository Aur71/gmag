import styles from './SubmitBtn.module.scss';

const SubmitBtn = ({ submitModal }) => {
  return (
    <button className={styles.submit_btn} onClick={submitModal}>
      Add review
    </button>
  );
};

export default SubmitBtn;
