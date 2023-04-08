import styles from '../styles/pages/Home.module.scss';
import PromotionSlider from '@/components/home_components/promotion_slider/PromotionSlider';
import ProductSlider from '@/components/home_components/product_slider/ProductSlider';
import ProductsSlider from '@/components/sliders/products_slider/ProductsSlider';
import NewsLetterForm from '@/components/forms/news_letter_form/NewsLetterForm';
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

      <NewsLetterForm />
    </div>
  );
}
