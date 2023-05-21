import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Slider from './slider/Slider';
import Actions from './actions/Actions';
import styles from './ImageViewer.module.scss';
import { closeImageViewer } from '@/redux/reducers/imageViewer';

const ImageViewer = ({ images }) => {
  const dispatch = useDispatch();
  const { showImageViewer } = useSelector((state) => state.imageViewer);

  const dispatchAction = (e) => {
    if (e.target.classList[0] === 'ImageViewer_image_viewer___k_ZJ') {
      dispatch(closeImageViewer());
      return;
    }
  };

  return (
    <section
      className={`${styles.image_viewer} ${showImageViewer && styles.active}`}
      onClick={dispatchAction}
    >
      <div className={styles.container}>
        <Header />

        <div className={styles.grid_container}>
          <Sidebar images={images} />
          <Slider images={images} />
          <Actions />
        </div>
      </div>
    </section>
  );
};

export default ImageViewer;
