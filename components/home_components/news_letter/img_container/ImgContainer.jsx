import Image from 'next/image';
import styles from './ImgContainer.module.scss';

const ImgContainer = () => {
  return (
    <div className={styles.img_container}>
      <Image
        src='/news-letter.jpg'
        alt='2 grils using the laptop'
        priority={true}
        width={400}
        height={220}
      />
    </div>
  );
};

export default ImgContainer;
