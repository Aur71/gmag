import NormalLink from './normal_link/NormalLink';
import NestedLink from './nested_link/NestedLink';
import styles from './LinkList.module.scss';
import { sidebarLinks } from '@/data/links/sidebar-links';

const LinkList = () => {
  return (
    <div className={styles.link_list}>
      {sidebarLinks.map((link) => {
        const { linkType, id } = link;
        if (linkType === 'normal') return <NormalLink key={id} link={link} />;
        if (linkType === 'nested') return <NestedLink key={id} link={link} />;
      })}
    </div>
  );
};

export default LinkList;
