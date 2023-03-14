import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import styles from './Sidebar.module.scss';
import { handleActiveImageIndex } from '@/redux/reducers/singleProductSlice';

// TEMP IMG
import img1 from '../../../../public/temp/computer.png';
import img2 from '../../../../public/temp/laptop.png';
const images = [
  {
    name: 'img1',
    img: img1,
  },
  {
    name: 'img2',
    img: img2,
  },
  {
    name: 'img3',
    img: img1,
  },
  {
    name: 'img4',
    img: img2,
  },
  {
    name: 'img5',
    img: img1,
  },
  {
    name: 'img6',
    img: img2,
  },
  {
    name: 'img7',
    img: img2,
  },
  {
    name: 'img8',
    img: img1,
  },
  {
    name: 'img9',
    img: img2,
  },
  {
    name: 'img10',
    img: img1,
  },
  {
    name: 'img11',
    img: img2,
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const { activeImageIndex } = useSelector((state) => state.singleProduct);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.btns_container}>
        {images.map((image, index) => {
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
