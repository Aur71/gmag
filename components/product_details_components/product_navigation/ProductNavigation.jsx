import styles from './ProductNavigation.module.scss';
import { FaProductHunt } from 'react-icons/fa';
import { MdDescription, MdInfo, MdReviews, MdRecommend } from 'react-icons/md';
import { BsFillQuestionSquareFill, BsFillShareFill } from 'react-icons/bs';

const ProductNavigation = () => {
  return (
    <nav className={styles.product_navigation}>
      <button>
        <span>Product</span>
        <FaProductHunt className={styles.icon} />
      </button>

      <button>
        <span>Description</span>
        <MdDescription className={styles.icon} />
      </button>

      <button>
        <span>Specifications</span>
        <MdInfo className={styles.icon} />
      </button>

      <button>
        <span>Reviews</span>
        <MdReviews className={styles.icon} />
      </button>

      <button>
        <span>Questions</span>
        <BsFillQuestionSquareFill className={styles.icon} />
      </button>

      <button>
        <span>Recommendations</span>
        <MdRecommend className={styles.icon} />
      </button>

      <button>
        <span>Share</span>
        <BsFillShareFill className={styles.icon} />
      </button>
    </nav>
  );
};

export default ProductNavigation;
