import Header from '@/components/favorites_components/header/Header';
import FiltersContainer from '@/components/favorites_components/filters_container/FiltersContainer';
import ProductList from '@/components/favorites_components/product_list/ProductList';
import AddListForm from '@/components/favorites_components/add_list_form/AddListForm';
import styles from '../styles/pages/Favorites.module.scss';

const Favorites = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.favorites}>
      <div className={styles.center}>
        <Header />
        <FiltersContainer />
        <ProductList />
        <AddListForm />
      </div>
    </div>
  );
};

export default Favorites;

export const getServerSideProps = async () => {
  try {
    // FETCHING THE DATA BASED ON THE URL
    // const res = await axios.get(`api/products/${params.type}/${params.id}`);
    const data = ['fetch user favotites data'];

    return { props: { data } };
  } catch (error) {
    return { props: { data: [] } };
  }
};
