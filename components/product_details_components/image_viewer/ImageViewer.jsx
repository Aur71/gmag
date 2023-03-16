import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Slider from './slider/Slider';
import Actions from './actions/Actions';
import styles from './ImageViewer.module.scss';
import { handleShowImageViewer } from '@/redux/reducers/singleProductSlice';

const ImageViewer = () => {
  const dispatch = useDispatch();
  const { showImageViewer } = useSelector((state) => state.singleProduct);

  const closeImageViewer = (e) => {
    if (e.target.classList[0] === 'ImageViewer_image_viewer___k_ZJ') {
      dispatch(handleShowImageViewer(false));
      return;
    }
  };

  return (
    <section
      className={`${styles.image_viewer} ${showImageViewer && styles.active}`}
      onClick={closeImageViewer}
    >
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
