import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import styles from './ImgBtn.module.scss';
import {
  handleActiveIndex,
  openImageViewer,
} from '@/redux/reducers/imageViewer';

const ImgBtn = ({ image, index }) => {
  const dispatch = useDispatch();
  const { activeIndex } = useSelector((state) => state.imageViewer);

  return (
    <button
      className={`${styles.img_btn} ${activeIndex === index && styles.active}`}
      onMouseOver={() => dispatch(handleActiveIndex(index))}
      onClick={() => dispatch(openImageViewer())}
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
