import Link from 'next/link';
import styles from './Links.module.scss';

const Links = ({ links }) => {
  return (
    <div className={styles.links}>
      {links.map((link, index) => {
        return (
          <Link href={link.href} key={index}>
            {link.textContent}
          </Link>
        );
      })}
    </div>
  );
};

export default Links;
