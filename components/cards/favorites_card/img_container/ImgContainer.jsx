import Link from 'next/link';
import Image from 'next/image';
import styles from './ImgContainer.module.scss';

const ImgContainer = ({ product }) => {
  const { type, _id, name, thumbnail } = product;
  const link = `/products/${type}/${_id}`;

  return (
    <Link href={link} className={styles.img_container}>
      <Image
        src={thumbnail}
        alt={name}
        width={150}
        height={150}
        priority={true}
      />
    </Link>
  );
};

export default ImgContainer;
