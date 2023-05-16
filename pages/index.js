/* eslint-env es6 */
import PromotionSlider from '@/components/home_components/promotion_slider/PromotionSlider';
import ProductSlider from '@/components/home_components/product_slider/ProductSlider';
import NewsLetter from '@/components/home_components/news_letter/NewsLetter';
import axios from 'axios';
import styles from '../styles/pages/Home.module.scss';
import { ImFire } from 'react-icons/im';
import { AiFillStar } from 'react-icons/ai';
import { starClr } from '@/styles/themes/themes.module.scss';

export default function Home({ promotionSlides, hotDeals, mostPopular }) {
  return (
    <div className={styles.home}>
      <PromotionSlider promotionSlides={promotionSlides} />
      {hotDeals.length ? (
        <ProductSlider
          title='Hot Deals'
          icon={<ImFire style={{ color: 'red' }} />}
          products={hotDeals}
        />
      ) : null}

      {mostPopular.length ? (
        <ProductSlider
          title='Most Popular'
          icon={<AiFillStar style={{ color: starClr }} />}
          products={mostPopular}
        />
      ) : null}
      <NewsLetter />
    </div>
  );
}

export async function getStaticProps() {
  const [promotionSlidesResponse, hotDealsResponse, mostPopularResponse] =
    await Promise.all([
      axios.get(`${process.env.API}/api/v1/promotion-slides`),
      axios.get(`${process.env.API}/api/v1/products/hot-deals`),
      axios.get(`${process.env.API}/api/v1/products/most-popular`),
    ]);

  const promotionSlides = promotionSlidesResponse.data;
  const hotDeals = hotDealsResponse.data;
  const mostPopular = mostPopularResponse.data;

  return {
    props: {
      promotionSlides,
      hotDeals,
      mostPopular,
    },
    revalidate: 60,
  };
}
