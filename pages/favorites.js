import Filters from '@/components/favorites_components/filters/Filters';
import Cards from '@/components/favorites_components/cards/Cards';
import Pagination from '@/components/favorites_components/pagination/Pagination';
import Recommendations from '@/components/favorites_components/recommendations/Recommendations';
import NavigationHistory from '@/components/favorites_components/navigation_history/NavigationHistory';
import styles from '../styles/pages/Favorites.module.scss';

const favorites = () => {
  return (
    <div className={styles.favorites}>
      <div className={styles.center}>
        <Filters />
        <Cards />
        <Pagination />
        <Recommendations />
        <NavigationHistory />
      </div>
    </div>
  );
};

export default favorites;
