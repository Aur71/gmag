import ProductShowcase from '@/components/product_details_components/product_showcase/ProductShowcase';
import ProductDescription from '@/components/product_details_components/product_description/ProductDescription';
import ProductSpecifications from '@/components/product_details_components/product_specifications/ProductSpecifications';
import ProductReviews from '@/components/product_details_components/product_reviews/ProductReviews';
import ProductQuestions from '@/components/product_details_components/product_questions/ProductQuestions';
import ImageViewer from '@/components/product_details_components/image_viewer/ImageViewer';
import AddReview from '@/components/product_details_components/modals/add_review/AddReview';
import EditReview from '@/components/product_details_components/modals/edit_review/EditReview';
import DeleteReview from '@/components/product_details_components/modals/delete_review/DeleteReview';
import axios from 'axios';
import styles from '../../../styles/pages/ProductDetails.module.scss';

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>product not found</div>;
  }

  return (
    <div className={styles.product_details}>
      <ProductShowcase product={product} />

      <ImageViewer images={product.images} />
      {product.description.length ? (
        <ProductDescription description={product.description} />
      ) : null}
      <ProductSpecifications specifications={product.specifications} />
      <ProductReviews product={product} />
      <AddReview product={product} />
      <EditReview />
      <DeleteReview />

      <ProductQuestions questions={product.questions} />
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
