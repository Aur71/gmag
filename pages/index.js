import PromotionSlider from '@/components/home_components/promotion_slider/PromotionSlider';
import ProductSlider from '@/components/home_components/product_slider/ProductSlider';
import NewsLetter from '@/components/home_components/news_letter/NewsLetter';
import axios from 'axios';
import styles from '../styles/pages/Home.module.scss';
import { ImFire } from 'react-icons/im';
import { AiFillStar } from 'react-icons/ai';

// TEMP DATA
import { promotionSlider } from '@/data/temporary/promotion_slider';
import { hotDeals } from '@/data/temporary/hotDeals';
import { mostPopular } from '@/data/temporary/mostPopular';

export default function Home() {
  return (
    <div className={styles.home}>
      <PromotionSlider promotionSlider={promotionSlider} />
      <ProductSlider
        title='Hot Deals'
        icon={<ImFire className='red' />}
        products={hotDeals}
      />
      <ProductSlider
        title='Most Popular'
        icon={<AiFillStar className='star-clr' />}
        products={mostPopular}
      />
      <NewsLetter />
    </div>
  );
}

export async function getStaticProps() {
  const [promotionRes, hotDealsRes, mostPopularRes] = await Promise.all([
    axios.get('https://api.example.com/promotionSlider'),
    axios.get('https://api.example.com/hotDeals'),
    axios.get('https://api.example.com/mostPopular'),
  ]);

  const promotionSlider = promotionRes.data;
  const hotDeals = hotDealsRes.data;
  const mostPopular = mostPopularRes.data;
  return {
    props: {
      promotionSlider,
      hotDeals,
      mostPopular,
    },
    revalidate: 60,
  };
}
