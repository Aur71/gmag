import Image from 'next/image';
import styles from './Img.module.scss';

const Img = ({ item }) => {
  return (
    <Image
      src={item.src}
      alt={item.alt}
      style={item.styles}
      priority={true}
      width={1000}
      height={1000}
      className={styles.default}
    />
  );
};

export default Img;
