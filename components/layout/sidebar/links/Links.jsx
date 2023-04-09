import Header from './header/Header';
import HelpLink from './help_link/HelpLink';
import LinkList from './link_list/LinkList';
import styles from './Links.module.scss';

const Links = () => {
  return (
    <div className={styles.links}>
      <Header />
      <LinkList />
      <HelpLink />
    </div>
  );
};

export default Links;
