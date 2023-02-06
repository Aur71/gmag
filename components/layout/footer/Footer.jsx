import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.png';
import { socialLinks } from '@/data/social-links';
import { footerLinks } from '@/data/footer-links';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_links}>
        <Link href='/' className={styles.logo}>
          <Image src={logo} alt='logo' priority={true} />
        </Link>

        {footerLinks.map((item) => {
          return (
            <ul key={item.id}>
              {item.links.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>

      <div className={styles.line}></div>

      <ul className={styles.social_links}>
        {socialLinks.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.path}>{item.icon}</a>
            </li>
          );
        })}
      </ul>

      <p>Copyright &copy; All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
