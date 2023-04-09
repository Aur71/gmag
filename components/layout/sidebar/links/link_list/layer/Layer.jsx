import Header from './header/Header';
import NormalLink from '../normal_link/NormalLink';
import NestedLink from '../nested_link/NestedLink';
import styles from './Layer.module.scss';

const Layer = ({ title, links, isLayerActive, setIsLayerActive }) => {
  return (
    <div className={`${styles.layer} ${isLayerActive && styles.active}`}>
      <Header title={title} setIsLayerActive={setIsLayerActive} />

      <div className={styles.links}>
        {links.map((link) => {
          const { linkType, id } = link;
          if (linkType === 'normal') return <NormalLink key={id} link={link} />;
          if (linkType === 'nested') return <NestedLink key={id} link={link} />;
        })}
      </div>
    </div>
  );
};

export default Layer;
