import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import styles from './ActiveImg.module.scss';
import { handleShowImageViewer } from '@/redux/reducers/singleProductSlice';

const ActiveImg = ({ images }) => {
  const dispatch = useDispatch();
  const { activeImageIndex } = useSelector((state) => state.singleProduct);

  return (
    <div className={styles.active_img}>
      <Image
        priority={true}
        src={images[activeImageIndex].url}
        alt={images[activeImageIndex].name}
        width={600}
        height={600}
        onClick={() => dispatch(handleShowImageViewer(true))}
      />
    </div>
  );
};

export default ActiveImg;
