import styles from './YouTubeVideo.module.scss';

const YouTubeVideo = ({ data }) => {
  return (
    <div className={styles.default} style={data?.styles}>
      <iframe
        width='640'
        height='360'
        src={`https://www.youtube.com/embed/${data?.videoId}`}
        title={data?.videoTitle}
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
