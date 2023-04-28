import B from '../../../small_elements/bold/B';
import I from '../../../small_elements/italic/I';
import A from '../../../small_elements/link/A';
import Span from '../../../small_elements/span/Span';
import styles from './H3.module.scss';

const H3 = ({ data }) => {
  return (
    <h3 className={styles.default} style={data?.styles}>
      {data?.content?.map((item) => {
        if (typeof item === 'string') return <span key={item._id}>{item}</span>;
        if (item.element === 'b') return <B key={item._id} data={item} />;
        if (item.element === 'i') return <I key={item._id} data={item} />;
        if (item.element === 'a') return <A key={item._id} data={item} />;
        if (item.element === 'span') return <Span key={item._id} data={item} />;
      })}
    </h3>
  );
};

export default H3;
