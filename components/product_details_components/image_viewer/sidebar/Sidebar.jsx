import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import styles from './Sidebar.module.scss';
import { handleActiveIndex } from '@/redux/reducers/imageViewer';

const Sidebar = ({ images }) => {
  const dispatch = useDispatch();
  const { activeIndex } = useSelector((state) => state.imageViewer);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.btns_container}>
        {images?.map((image, index) => {
          return (
            <button
              key={image._id}
              className={`${activeIndex === index && styles.active}`}
              onClick={() => dispatch(handleActiveIndex(index))}
            >
              <Image
                src={image.url}
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
