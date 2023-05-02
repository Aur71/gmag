import Link from 'next/link';
import styles from './Links.module.scss';

const Links = () => {
  return (
    <div className={styles.links}>
      <p>
        Problems with the product or delivery?{' '}
        <Link href='/tickets'>Let us know</Link>
      </p>

      <p>
        By publishing the review, you agree with the site's{' '}
        <Link href='/termsAndConditions'>terms and conditions</Link>
      </p>
    </div>
  );
};

export default Links;
