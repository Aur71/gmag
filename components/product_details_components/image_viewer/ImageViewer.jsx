import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Slider from './slider/Slider';
import Actions from './actions/Actions';
import styles from './ImageViewer.module.scss';

const ImageViewer = () => {
  return (
    <section className={styles.image_viewer}>
      <div className={styles.container}>
        <Header />

        <div className={styles.grid_container}>
          <Sidebar />
          <Slider />
          <Actions />
        </div>
      </div>
    </section>
  );
};

export default ImageViewer;
