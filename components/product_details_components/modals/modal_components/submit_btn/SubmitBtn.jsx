import styles from './SubmitBtn.module.scss';

const SubmitBtn = ({ submitModal, loading }) => {
  return (
    <button
      className={styles.submit_btn}
      onClick={submitModal}
      disabled={loading}
    >
      Add review
    </button>
  );
};

export default SubmitBtn;
