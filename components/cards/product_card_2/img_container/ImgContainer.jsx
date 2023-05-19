import FavoritesBtn from '../../card_components/favorites_btn/FavoritesBtn';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ImgContainer.module.scss';

const ImgContainer = ({ product }) => {
  const { thumbnail, name, type, _id } = product;
  const link = `/products/${type}/${_id}`;

  return (
    <div className={styles.img_container}>
      <FavoritesBtn product={product} />

      <Link href={link}>
        <Image
          src={thumbnail}
          alt={name}
          priority={true}
          width={350}
          height={350}
        />
      </Link>
    </div>
  );
};

export default ImgContainer;
