import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import { MdClose } from 'react-icons/md';

const Header = ({ closeModal, product, title }) => {
  const link = `/products/${product.type}/${product._id}`;

  return (
    <div className={styles.header}>
      <Image
        src={product.thumbnail}
        alt={product.name}
        width={60}
        height={60}
      />

      <div>
        <h4>{title}</h4>
        <Link href={link}>{product.name}</Link>
      </div>

      <button onClick={closeModal}>
        <MdClose />
      </button>
    </div>
  );
};

export default Header;
