import { useState } from 'react';
import ProductShowcase from '@/components/product_details_components/product_showcase/ProductShowcase';
import ProductDescription from '@/components/product_details_components/product_description/ProductDescription';
import ProductSpecifications from '@/components/product_details_components/product_specifications/ProductSpecifications';
import ProductReviews from '@/components/product_details_components/product_reviews/ProductReviews';
import ProductQuestions from '@/components/product_details_components/product_questions/ProductQuestions';
import ProductRecommendations from '@/components/product_details_components/product_recommendations/ProductRecommendations';
import ProductNavigation from '@/components/product_details_components/product_navigation/ProductNavigation';
import ProductShare from '@/components/product_details_components/product_share/ProductShare';
import ImageViewer from '@/components/product_details_components/image_viewer/ImageViewer';
import AllBuyingOptions from '@/components/product_details_components/all_buying_options/AllBuyingOptions';
import AddReview from '@/components/product_details_components/add_review/AddReview';
// import axios from 'axios';
import styles from '../../../styles/pages/ProductDetails.module.scss';

// TEMP DATA
import { singleProduct } from '@/data/temp/singleProduct';

const ProductDetails = ({ data }) => {
  const [productShowcaseRef, setProductShowcaseRef] = useState(null);
  const [productDescriptionRef, setProductDescriptionRef] = useState(null);
  const [productSpecificationsRef, setProductSpecificationsRef] =
    useState(null);
  const [productReviewsRef, setProductReviewsRef] = useState(null);
  const [productQuestionsRef, setProductQuestionsRef] = useState(null);
  const [productRecommendationsRef, setProductRecommendationsRef] =
    useState(null);

  const handleProductShowcaseMount = (node) => setProductShowcaseRef(node);
  const handleProductDescriptionRef = (node) => setProductDescriptionRef(node);
  const handleProductSpecificationsRef = (node) =>
    setProductSpecificationsRef(node);
  const handleProductReviewsRef = (node) => setProductReviewsRef(node);
  const handleProductQuestionsRef = (node) => setProductQuestionsRef(node);
  const handleProductRecommendationsRef = (node) =>
    setProductRecommendationsRef(node);

  console.log(data);
  return (
    <div className={styles.product_details}>
      <ProductShowcase
        data={singleProduct}
        onMount={handleProductShowcaseMount}
      />
      <ImageViewer images={singleProduct.images} />
      <AllBuyingOptions />
      {singleProduct.description.length ? (
        <ProductDescription
          description={singleProduct.description}
          onMount={handleProductDescriptionRef}
        />
      ) : null}
      <ProductSpecifications
        specifications={singleProduct.specifications}
        onMount={handleProductSpecificationsRef}
      />
      <ProductReviews
        reviewsData={singleProduct.reviewsData}
        onMount={handleProductReviewsRef}
      />
      <AddReview />

      {/*  */}
      {/*  */}
      {/* FINISH PRODUCT QUESTIONS AND RECOMMENDATIONS */}
      <ProductQuestions
        questions={singleProduct.questions}
        onMount={handleProductQuestionsRef}
      />
      <ProductRecommendations onMount={handleProductRecommendationsRef} />
      <ProductNavigation
        productShowcaseRef={productShowcaseRef}
        productDescriptionRef={productDescriptionRef}
        productSpecificationsRef={productSpecificationsRef}
        productReviewsRef={productReviewsRef}
        productQuestionsRef={productQuestionsRef}
        productRecommendationsRef={productRecommendationsRef}
      />
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
