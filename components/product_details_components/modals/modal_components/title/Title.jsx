import styles from './Title.module.scss';

const Title = ({ title, setTitle, titleError }) => {
  const handleTitle = (e) => {
    const value = e.target.value;
    if (value.length > 100) return;
    setTitle(e.target.value);
  };

  return (
    <div className={styles.title}>
      <label htmlFor='review title'>Review title:</label>
      <input
        type='text'
        name='review title'
        placeholder='Your review title...'
        value={title}
        onChange={handleTitle}
        className={titleError && styles.error}
      />
      <div>
        <span className={titleError && styles.active}>{titleError}</span>
        <span>{title.length} / 100</span>
      </div>
    </div>
  );
};

export default Title;
