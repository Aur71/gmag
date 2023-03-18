import Image from 'next/image';
import styles from './Img.module.scss';

const Img = ({ data }) => {
  return (
    <Image
      src={data.src}
      alt={data.alt}
      style={data.styles}
      priority={true}
      width={data.width}
      height={data.height}
      className={styles.default}
    />
  );
};

export default Img;
