import styles from './SubmitBtn.module.scss';

const SubmitBtn = ({ submitModal, loading, textContent }) => {
  return (
    <button
      className={styles.submit_btn}
      onClick={submitModal}
      disabled={loading}
    >
      {textContent}
    </button>
  );
};

export default SubmitBtn;
