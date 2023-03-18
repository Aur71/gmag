import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import styles from './Sidebar.module.scss';
import { handleActiveImageIndex } from '@/redux/reducers/singleProductSlice';

const Sidebar = ({ images }) => {
  const dispatch = useDispatch();
  const { activeImageIndex } = useSelector((state) => state.singleProduct);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.btns_container}>
        {images?.map((image, index) => {
          return (
            <button
              key={`image_viewer_${image.name}_${index}`}
              className={`${activeImageIndex === index && styles.active}`}
              onClick={() => dispatch(handleActiveImageIndex(index))}
            >
              <Image
                src={image.img}
                alt={image.name}
                width={100}
                height={100}
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
