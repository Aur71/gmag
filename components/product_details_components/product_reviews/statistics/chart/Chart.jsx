import { useRef, useEffect } from 'react';
import Row from './row/Row';
import styles from './Chart.module.scss';

const Chart = ({ starsCount, reviewsCount }) => {
  const chartRef = useRef(null);

  // This useEffect sets the width of all the starCount on the right of the chart. This way if one count is 1000 and one is 0 they will have the same width
  useEffect(() => {
    const parent = chartRef.current.children;
    let width = 0;

    for (let i = 0; i < 5; i++) {
      const currentWidth = parent[i].children[2].getBoundingClientRect().width;
      if (currentWidth > width) width = currentWidth;
    }

    const template = `50px 1fr ${width}px`;
    parent[0].style.gridTemplateColumns = template;
    parent[1].style.gridTemplateColumns = template;
    parent[2].style.gridTemplateColumns = template;
    parent[3].style.gridTemplateColumns = template;
    parent[4].style.gridTemplateColumns = template;
  }, [reviewsCount]);

  return (
    <div className={styles.chart} ref={chartRef}>
      <Row stars={5} starCount={starsCount[5]} reviewsCount={reviewsCount} />
      <Row stars={4} starCount={starsCount[4]} reviewsCount={reviewsCount} />
      <Row stars={3} starCount={starsCount[3]} reviewsCount={reviewsCount} />
      <Row stars={2} starCount={starsCount[2]} reviewsCount={reviewsCount} />
      <Row stars={1} starCount={starsCount[1]} reviewsCount={reviewsCount} />
    </div>
  );
};

export default Chart;
