import { useRef, useEffect } from 'react';
import Row from './row/Row';
import styles from './Chart.module.scss';

const Chart = ({ reviewsData, reviewsCount, setFilterBy }) => {
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
  }, [reviewsData]);

  return (
    <div className={styles.chart} ref={chartRef}>
      <Row
        stars={5}
        starCount={reviewsData[4].count}
        reviewsCount={reviewsCount}
        setFilterBy={setFilterBy}
      />
      <Row
        stars={4}
        starCount={reviewsData[3].count}
        reviewsCount={reviewsCount}
        setFilterBy={setFilterBy}
      />
      <Row
        stars={3}
        starCount={reviewsData[2].count}
        reviewsCount={reviewsCount}
        setFilterBy={setFilterBy}
      />
      <Row
        stars={2}
        starCount={reviewsData[1].count}
        reviewsCount={reviewsCount}
        setFilterBy={setFilterBy}
      />
      <Row
        stars={1}
        starCount={reviewsData[0].count}
        reviewsCount={reviewsCount}
        setFilterBy={setFilterBy}
      />
    </div>
  );
};

export default Chart;
