import { useState } from 'react';
import Layer from '../layer/Layer';
import styles from './NestedLink.module.scss';
import { FaAngleRight } from 'react-icons/fa';

const NestedLink = ({ link }) => {
  const { textContent, links } = link;
  const [isLayerActive, setIsLayerActive] = useState(false);

  return (
    <div className={styles.nested_link}>
      <button onClick={() => setIsLayerActive(true)}>
        {textContent} <FaAngleRight className={styles.icon} />
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
