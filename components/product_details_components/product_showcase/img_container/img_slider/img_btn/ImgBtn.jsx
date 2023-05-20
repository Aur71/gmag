import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import styles from './ImgBtn.module.scss';
import {
  handleActiveImageIndex,
  handleShowImageViewer,
} from '@/redux/reducers/singleProductSlice';

const ImgBtn = ({ image, index }) => {
  const dispatch = useDispatch();
  const { activeImageIndex } = useSelector((state) => state.singleProduct);

  return (
    <button
      className={`${styles.img_btn} ${
        activeImageIndex === index && styles.active
      }`}
      onMouseOver={() => dispatch(handleActiveImageIndex(index))}
      onClick={() => dispatch(handleShowImageViewer(true))}
    >
      <Image
        src={image.url}
        alt={image.name}
        width={100}
        height={100}
        priority={true}
      />
    </button>
  );
};

export default ImgBtn;
