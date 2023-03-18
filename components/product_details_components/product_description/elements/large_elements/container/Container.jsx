import A from '../../small_elements/link/A';
import B from '../../small_elements/bold/B';
import I from '../../small_elements/italic/I';
import Span from '../../small_elements/span/Span';
import H2 from '../../medium_elements/headings/h2/H2';
import H3 from '../../medium_elements/headings/h3/H3';
import H4 from '../../medium_elements/headings/h4/H4';
import H5 from '../../medium_elements/headings/h5/H5';
import H6 from '../../medium_elements/headings/h6/H6';
import P from '../../medium_elements/paragraph/P';
import Ol from '../../medium_elements/lists/ordered/Ol';
import Ul from '../../medium_elements/lists/unordered/Ul';
import Img from '../../medium_elements/image/Img';
import YouTubeVideo from '../../medium_elements/youtube_video/YouTubeVideo';
import styles from './Container.module.scss';

const Container = ({ data }) => {
  return (
    <div className={styles.default} style={data?.styles}>
      {data?.content?.map((item, index) => {
        const { element } = item;
        if (element === 'h2') return <H2 key={index} data={item} />;
        if (element === 'h3') return <H3 key={index} data={item} />;
        if (element === 'h4') return <H4 key={index} data={item} />;
        if (element === 'h5') return <H5 key={index} data={item} />;
        if (element === 'h6') return <H6 key={index} data={item} />;
        if (element === 'p') return <P key={index} data={item} />;
        if (element === 'a') return <A key={index} data={item} />;
        if (element === 'b') return <B key={index} data={item} />;
        if (element === 'i') return <I key={index} data={item} />;
        if (element === 'span') return <Span key={index} data={item} />;
        if (element === 'ol') return <Ol key={index} data={item} />;
        if (element === 'ul') return <Ul key={index} data={item} />;
        if (element === 'img') return <Img key={index} data={item} />;
        if (element === 'youtube video')
          return <YouTubeVideo key={index} data={item} />;
      })}
    </div>
  );
};

export default Container;
