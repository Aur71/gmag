import ProductShowcase from '@/components/product_details_components/product_showcase/ProductShowcase';
import ProductDescription from '@/components/product_details_components/product_description/ProductDescription';
import ProductSpecifications from '@/components/product_details_components/product_specifications/ProductSpecifications';
import ProductReviews from '@/components/product_details_components/product_reviews/ProductReviews';
import ProductQuestions from '@/components/product_details_components/product_questions/ProductQuestions';
import ProductRecommendations from '@/components/product_details_components/product_recommendations/ProductRecommendations';
import ProductNavigation from '@/components/product_details_components/product_navigation/ProductNavigation';
import ProductShare from '@/components/product_details_components/product_share/ProductShare';
// import axios from 'axios';
import styles from '../../../styles/pages/ProductDetails.module.scss';

const ProductDetails = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.product_details}>
      <ProductShowcase />
      <ProductDescription />
      <ProductSpecifications />
      <ProductReviews />
      <ProductQuestions />
      <ProductRecommendations />
      <ProductNavigation />
      <ProductShare />
    </div>
  );
};

export default ProductDetails;

export const getServerSideProps = async () => {
  try {
    // FETCHING THE DATA BASED ON THE URL
    // const res = await axios.get(`api/products/${params.type}/${params.id}`);
    const data = ['single product data'];

    return { props: { data } };
  } catch (error) {
    return { props: { data: [] } };
  }
};
