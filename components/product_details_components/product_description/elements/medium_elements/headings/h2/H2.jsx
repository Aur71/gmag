import B from '../../../small_elements/bold/B';
import I from '../../../small_elements/italic/I';
import A from '../../../small_elements/link/A';
import Span from '../../../small_elements/span/Span';
import styles from './H2.module.scss';

const H2 = ({ data }) => {
  return (
    <h2 className={styles.default} style={data?.styles}>
      {data?.content?.map((item, index) => {
        if (typeof item === 'string') return <span key={index}>{item}</span>;
        if (item.element === 'b') return <B key={index} data={item} />;
        if (item.element === 'i') return <I key={index} data={item} />;
        if (item.element === 'a') return <A key={index} data={item} />;
        if (item.element === 'span') return <Span key={index} data={item} />;
      })}
    </h2>
  );
};

export default H2;
