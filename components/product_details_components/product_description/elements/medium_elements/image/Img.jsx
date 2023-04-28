import Image from 'next/image';
import styles from './Img.module.scss';

const Img = ({ data }) => {
  console.log(data);

  return (
    <Image
      src={data?.src}
      alt={data?.alt}
      width={data?.width}
      height={data?.height}
      className={styles.default}
      style={data?.styles}
      loading='lazy'
    />
  );
};

export default Img;
