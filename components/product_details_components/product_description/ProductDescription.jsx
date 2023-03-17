import H2 from './elements/headings/h2/H2';
import H3 from './elements/headings/h3/H3';
import H4 from './elements/headings/h4/H4';
import H5 from './elements/headings/h5/H5';
import H6 from './elements/headings/h6/H6';
import P from './elements/paragraph/P';
import A from './elements/link/A';
import B from './elements/bold/B';
import I from './elements/italic/I';
import Span from './elements/span/Span';
import Ol from './elements/lists/ordered/Ol';
import Ul from './elements/lists/unordered/Ul';
import Img from './elements/image/Img';
import Video from './elements/video/Video';
import YouTubeVideo from './elements/youtube_video/YouTubeVideo';

import styles from './ProductDescription.module.scss';

// TEMP DATA

const description = [
  {
    element: 'h2',
  },

  {
    element: 'h3',
  },

  {
    element: 'h4',
  },

  {
    element: 'h5',
  },

  {
    element: 'h6',
  },

  {
    element: 'p',
  },

  {
    element: 'a',
  },

  {
    element: 'b',
  },

  {
    element: 'i',
  },

  {
    element: 'span',
  },

  {
    element: 'ol',
  },

  {
    element: 'ul',
  },

  {
    element: 'img',
    src: '/temp/laptop.png',
    alt: 'laptop',
    styles: {
      width: '500px',
    },
  },

  {
    element: 'video',
  },

  {
    element: 'youtube video',
  },
];

const ProductDescription = () => {
  return (
    <section className={styles.product_description}>
      <div className={styles.center}>
        {description.map((item, index) => {
          const { element } = item;
          const key = `${element}_${index}`;

          if (element === 'h2') return <H2 key={key} item={item} />;
          if (element === 'h3') return <H3 key={key} item={item} />;
          if (element === 'h4') return <H4 key={key} item={item} />;
          if (element === 'h5') return <H5 key={key} item={item} />;
          if (element === 'h6') return <H6 key={key} item={item} />;
          if (element === 'p') return <P key={key} item={item} />;
          if (element === 'a') return <A key={key} item={item} />;
          if (element === 'b') return <B key={key} item={item} />;
          if (element === 'i') return <I key={key} item={item} />;
          if (element === 'span') return <Span key={key} item={item} />;
          if (element === 'ol') return <Ol key={key} item={item} />;
          if (element === 'ul') return <Ul key={key} item={item} />;
          if (element === 'img') return <Img key={key} item={item} />;
          if (element === 'video') return <Video key={key} item={item} />;
          if (element === 'youtube video')
            return <YouTubeVideo key={key} item={item} />;
        })}
      </div>
    </section>
  );
};

export default ProductDescription;
