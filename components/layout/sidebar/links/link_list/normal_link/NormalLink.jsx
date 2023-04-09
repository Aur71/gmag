import Link from 'next/link';
import styles from './NormalLink.module.scss';

const NormalLink = ({ link }) => {
  const { textContent, path } = link;

  return (
    <Link href={path} className={styles.normal_link}>
      {textContent}
    </Link>
  );
};

export default NormalLink;
