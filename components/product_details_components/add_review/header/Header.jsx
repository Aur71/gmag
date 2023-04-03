import { useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import { MdClose } from 'react-icons/md';
import { handleShowAddReview } from '@/redux/reducers/singleProductSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <Image src='/temp/computer.png' alt='product' width={60} height={60} />
      <div>
        <h4>Add a review for:</h4>
        <Link href='#'>
          PC Gaming GRT RGB with Intel® Core™ i5-10400F processor up to 4.30GHz,
          16GB DDR4, 1TB HDD, 480GB SSD, GeForce® RTX 2060 6GB GDDR6
        </Link>
      </div>

      <button onClick={() => dispatch(handleShowAddReview(false))}>
        <MdClose />
      </button>
    </div>
  );
};

export default Header;
