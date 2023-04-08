import styles from '../styles/pages/Home.module.scss';
import PromotionSlider from '@/components/home_components/promotion_slider/PromotionSlider';
import ProductsSlider from '@/components/sliders/products_slider/ProductsSlider';
import NewsLetterForm from '@/components/forms/news_letter_form/NewsLetterForm';
import { ImFire } from 'react-icons/im';
import { AiFillStar } from 'react-icons/ai';

// TEMP DATA
import { promotionSlider } from '@/data/temporary/promotion_slider';

export default function Home() {
  return (
    <div className={styles.home}>
      <PromotionSlider promotionSlider={promotionSlider} />
      <ProductsSlider title='Hot Deals' icon={<ImFire className='red' />} />
      <ProductsSlider
        title='Most Popular'
        icon={<AiFillStar className='star-clr' />}
      />

      <NewsLetterForm />
    </div>
  );
}
