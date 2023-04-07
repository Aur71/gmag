import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '@/components/layout/loading/Loading';
import CustomError from '@/components/favorites_components/custom_error/CustomError';
import AddProducts from '@/components/favorites_components/add_products/AddProducts';
import Filters from '@/components/favorites_components/filters/Filters';
import Cards from '@/components/favorites_components/cards/Cards';
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
  const { isLoading, error, products } = useSelector(
    (state) => state.favorites
  );

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
  if (error) return <CustomError />;
  if (!products.length) return <AddProducts />;

  return (
    <div className={styles.favorites}>
      <div className={styles.center}>
        <Filters />
        <Cards />
      </div>
    </div>
  );
};

export default Favorites;
