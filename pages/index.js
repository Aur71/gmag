import PromotionSlider from '@/components/sliders/promotion_slider/PromotionSlider';
import ProductsSlider from '@/components/sliders/products_slider/ProductsSlider';

import { ImFire } from 'react-icons/im';

export default function Home() {
  return (
    <div className='home'>
      <PromotionSlider />
      <ProductsSlider title='Hot Deals' icon={<ImFire className='red' />} />
    </div>
  );
}
