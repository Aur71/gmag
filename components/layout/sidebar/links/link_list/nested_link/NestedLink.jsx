import { useState } from 'react';
import Layer from '../layer/Layer';
import styles from './NestedLink.module.scss';
import { FiChevronRight } from 'react-icons/fi';

const NestedLink = ({ link }) => {
  const { textContent, links } = link;
  const [isLayerActive, setIsLayerActive] = useState(false);

  return (
    <div className={styles.nested_link}>
      <button onClick={() => setIsLayerActive(true)}>
        {textContent} <FiChevronRight className={styles.icon} />
      </button>
      <Layer
        title={textContent}
        links={links}
        isLayerActive={isLayerActive}
        setIsLayerActive={setIsLayerActive}
      />
    </div>
  );
};

export default NestedLink;
