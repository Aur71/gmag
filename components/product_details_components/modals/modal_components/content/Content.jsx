import styles from './Content.module.scss';

const Content = ({ content, setContent, contentError }) => {
  const handleContent = (e) => {
    const value = e.target.value;
    if (value.length > 500) return;
    setContent(e.target.value);
  };

  return (
    <div className={styles.content}>
      <label htmlFor='review'>Content:</label>
      <textarea
        name='review'
        placeholder='Your review ...'
        value={content}
        onChange={handleContent}
        className={contentError && styles.error}
      />
      <div>
        <span className={contentError && styles.active}>{contentError}</span>
        <span>{content.length} / 500</span>
      </div>
    </div>
  );
};

export default Content;
