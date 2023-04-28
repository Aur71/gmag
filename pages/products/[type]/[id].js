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
import AddReview from '@/components/product_details_components/add_review/AddReview';
import axios from 'axios';
import styles from '../../../styles/pages/ProductDetails.module.scss';

// TEMP DATA
import { singleProduct } from '@/data/temp/singleProduct';

const ProductDetails = ({ product }) => {
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

  return (
    <div className={styles.product_details}>
      <ProductShowcase data={product} onMount={handleProductShowcaseMount} />
      <ImageViewer images={product.images} />
      {singleProduct.description.length ? (
        <ProductDescription
          description={product.description}
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

export const getServerSideProps = async ({ params }) => {
  try {
    const productResponse = await axios.get(
      `http://localhost:3000/api/v1/products/id/${params.id}`
    );
    const product = productResponse.data;

    return { props: { product } };
  } catch (error) {
    return { props: { data: null } };
  }
};
