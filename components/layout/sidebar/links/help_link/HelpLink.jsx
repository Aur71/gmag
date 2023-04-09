import Link from 'next/link';
import styles from './HelpLink.module.scss';
import { BsQuestionCircle } from 'react-icons/bs';

const HelpLink = () => {
  return (
    <Link href='#' className={styles.help_link}>
      <BsQuestionCircle className={styles.icon} />
      Help
    </Link>
  );
};

export default HelpLink;
