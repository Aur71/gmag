import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '@/components/favorites_components/loading/Loading';
import Error from 'next/error';
import Filters from '@/components/favorites_components/filters/Filters';
import Cards from '@/components/favorites_components/cards/Cards';
import Recommendations from '@/components/favorites_components/recommendations/Recommendations';
import NavigationHistory from '@/components/favorites_components/navigation_history/NavigationHistory';
// import axios from 'axios';
import styles from '../styles/pages/Favorites.module.scss';
import {
  handleIsLoading,
  handleError,
  handleProducts,
} from '@/redux/reducers/favoritesSlice';

// TEMP DATA
import { userData } from '@/data/user-data';

const Favorites = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.favorites);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(handleIsLoading(true));
        // const response = await axios.get(
        //   'https://jsonplaceholder.typicode.com/todos/1'
        // );
        dispatch(handleProducts(userData.favorites));
        dispatch(handleIsLoading(false));
      } catch (err) {
        dispatch(handleError(err.message));
        dispatch(handleIsLoading(false));
      }
    };
    fetchData();
  }, [dispatch]);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className={styles.favorites}>
      <div className={styles.center}>
        <Filters />
        <Cards />
        <Recommendations />
        <NavigationHistory />
      </div>
    </div>
  );
};

export default Favorites;
