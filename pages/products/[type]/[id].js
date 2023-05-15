import { useEffect } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  useEffect(() => {
    // Save the current scroll position when navigating away from the page
    const handleRouteChangeStart = () => {
      window.sessionStorage.setItem('scrollPos', window.scrollY.toString());
    };

    // Restore the saved scroll position when returning to the page
    const handleRouteChangeComplete = () => {
      const scrollPos = window.sessionStorage.getItem('scrollPos');
      if (scrollPos !== null) {
        window.scrollTo({
          top: parseInt(scrollPos),
          left: 0,
          behavior: 'instant',
        });
        window.sessionStorage.removeItem('scrollPos');
      }
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

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
      <EditReview product={product} />
      <DeleteReview product={product} />

      <ProductQuestions questions={product.questions} />
    </div>
  );
};

export default ProductDetails;

export const getServerSideProps = async ({ params }) => {
  try {
    const productResponse = await axios.get(
      `https://gmag-backend.onrender.com/api/v1/products/id/${params.id}`
    );
    const product = productResponse.data;

    return { props: { product } };
  } catch (error) {
    return { props: { data: null } };
  }
};
