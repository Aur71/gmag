import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './PathContainer.module.scss';
import { BiChevronRight } from 'react-icons/bi';

const PathContainer = () => {
  const router = useRouter();

  return (
    <div className={styles.path_container}>
      <Link href='/'>
        Home
        <BiChevronRight className={styles.icon} />
      </Link>

      <Link href={`/products/${router?.query?.type}`}>
        {router?.query?.type}
        <BiChevronRight className={styles.icon} />
      </Link>

      <Link href={`/products/${router?.query?.type}/${router?.query?.id}`}>
        {router?.query?.id}
      </Link>
    </div>
  );
};

export default PathContainer;
