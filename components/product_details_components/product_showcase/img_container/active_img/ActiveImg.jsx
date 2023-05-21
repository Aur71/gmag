import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import styles from './ActiveImg.module.scss';
import { openImageViewer } from '@/redux/reducers/imageViewer';

const ActiveImg = ({ images }) => {
  const dispatch = useDispatch();
  const { activeIndex } = useSelector((state) => state.imageViewer);

  return (
    <div className={styles.active_img}>
      <Image
        priority={true}
        src={images[activeIndex].url}
        alt={images[activeIndex].name}
        width={600}
        height={600}
        onClick={() => dispatch(openImageViewer())}
      />
    </div>
  );
};

export default ActiveImg;
