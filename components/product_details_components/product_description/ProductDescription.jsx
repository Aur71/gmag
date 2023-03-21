import { useRef, useEffect, useState } from 'react';
import A from './elements/small_elements/link/A';
import B from './elements/small_elements/bold/B';
import I from './elements/small_elements/italic/I';
import Span from './elements/small_elements/span/Span';
import H2 from './elements/medium_elements/headings/h2/H2';
import H3 from './elements/medium_elements/headings/h3/H3';
import H4 from './elements/medium_elements/headings/h4/H4';
import H5 from './elements/medium_elements/headings/h5/H5';
import H6 from './elements/medium_elements/headings/h6/H6';
import P from './elements/medium_elements/paragraph/P';
import Ol from './elements/medium_elements/lists/ordered/Ol';
import Ul from './elements/medium_elements/lists/unordered/Ul';
import Img from './elements/medium_elements/image/Img';
import YouTubeVideo from './elements/medium_elements/youtube_video/YouTubeVideo';
import Container from './elements/large_elements/container/Container';
import styles from './ProductDescription.module.scss';

const ProductDescription = ({ description }) => {
  const [showMore, setShowMore] = useState(false);
  const productDescriptionRef = useRef(null);
  const paddingContainerRef = useRef(null);
  const btnRef = useRef(null);

  const handleShowMore = () => {
    const paddingContainerHeight =
      paddingContainerRef.current.getBoundingClientRect().height;

    if (!showMore) {
      productDescriptionRef.current.style.height = `${paddingContainerHeight}px`;
    } else {
      productDescriptionRef.current.style.height = `500px`;
    }

    setShowMore(!showMore);
  };

  useEffect(() => {
    const paddingContainerHeight =
      paddingContainerRef.current.getBoundingClientRect().height;

    if (paddingContainerHeight <= 500) {
      productDescriptionRef.current.style.height = `${paddingContainerHeight}px`;
      setShowMore(true);
      btnRef.current.style.display = 'none';
    } else {
      productDescriptionRef.current.style.height = `500px`;
      setShowMore(false);
      btnRef.current.style.display = 'flex';
    }
  }, [description]);

  return (
    <section className={styles.product_description} ref={productDescriptionRef}>
      <div className={styles.padding_container} ref={paddingContainerRef}>
        <div className={styles.center}>
          <h2>Description</h2>

          {description?.map((item, index) => {
            const { element } = item;
            const key = `${element}_${index}`;

            if (element === 'h2') return <H2 key={key} data={item} />;
            if (element === 'h3') return <H3 key={key} data={item} />;
            if (element === 'h4') return <H4 key={key} data={item} />;
            if (element === 'h5') return <H5 key={key} data={item} />;
            if (element === 'h6') return <H6 key={key} data={item} />;
            if (element === 'p') return <P key={key} data={item} />;
            if (element === 'a') return <A key={key} data={item} />;
            if (element === 'b') return <B key={key} data={item} />;
            if (element === 'i') return <I key={key} data={item} />;
            if (element === 'span') return <Span key={key} data={item} />;
            if (element === 'ol') return <Ol key={key} data={item} />;
            if (element === 'ul') return <Ul key={key} data={item} />;
            if (element === 'img') return <Img key={key} data={item} />;
            if (element === 'youtube video')
              return <YouTubeVideo key={key} data={item} />;
            if (element === 'container')
              return <Container key={key} data={item} />;
          })}
        </div>
      </div>

      <button onClick={handleShowMore} ref={btnRef}>
        {showMore ? 'Show less' : 'Show more'}
      </button>

      <div
        className={`${styles.overlay} ${showMore ? styles.disabled : null}`}
      ></div>
    </section>
  );
};

export default ProductDescription;
