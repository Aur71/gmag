import styles from './Video.module.scss';

const Video = () => {
  return (
    <video className={styles.default} controls autoPlay={false}>
      <source src='myvideo.mp4' type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
