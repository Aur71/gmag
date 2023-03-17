import styles from './YouTubeVideo.module.scss';

const YouTubeVideo = () => {
  return (
    <div className={styles.default}>
      <iframe
        width='640'
        height='360'
        src='https://www.youtube.com/embed/gJMXmsG9ZSI'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
