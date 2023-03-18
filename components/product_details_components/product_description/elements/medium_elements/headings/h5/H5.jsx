import B from '../../../small_elements/bold/B';
import I from '../../../small_elements/italic/I';
import A from '../../../small_elements/link/A';
import Span from '../../../small_elements/span/Span';
import styles from './H5.module.scss';

const H5 = ({ data }) => {
  return (
    <h5 className={styles.default} style={data?.styles}>
      {data?.content?.map((item, index) => {
        if (typeof item === 'string') return <span key={index}>{item}</span>;
        if (item.element === 'b') return <B key={index} data={item} />;
        if (item.element === 'i') return <I key={index} data={item} />;
        if (item.element === 'a') return <A key={index} data={item} />;
        if (item.element === 'span') return <Span key={index} data={item} />;
      })}
    </h5>
  );
};

export default H5;
