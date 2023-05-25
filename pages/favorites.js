import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loading from '@/features/loading/Loading';
import Header from '@/components/favorites_components/header/Header';
import ProductList from '@/components/favorites_components/product_list/ProductList';
import AddListForm from '@/components/favorites_components/add_list_form/AddListForm';
import EditListForm from '@/components/favorites_components/edit_list_form/EditListForm';
import DeleteListForm from '@/components/favorites_components/delete_list_form/DeleteListForm';
import styles from '../styles/pages/Favorites.module.scss';
import { fetchFavorites } from '@/redux/reducers/favoritesSlice';

// temp
import UnderDevelopment from '@/components/under_development/UnderDevelopment';

const Favorites = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.favorites);

  const underDevelopment = true;
  if (underDevelopment) return <UnderDevelopment />;

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <h1>Something went wrong.</h1>;
  }

  return (
    <div className={styles.favorites}>
      <div className={styles.center}>
        <Header />
        <ProductList />
        <AddListForm />
        <EditListForm />
        <DeleteListForm />
      </div>
    </div>
  );
};

export default Favorites;
