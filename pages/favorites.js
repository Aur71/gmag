import Header from '@/components/favorites_components/header/Header';
import ProductList from '@/components/favorites_components/product_list/ProductList';
import AddListForm from '@/components/favorites_components/add_list_form/AddListForm';
import EditListForm from '@/components/favorites_components/edit_list_form/EditListForm';
import DeleteListForm from '@/components/favorites_components/delete_list_form/DeleteListForm';
import styles from '../styles/pages/Favorites.module.scss';

// temp
import UnderDevelopment from '@/components/under_development/UnderDevelopment';

const Favorites = ({ data }) => {
  const underDevelopment = true;
  if (underDevelopment) return <UnderDevelopment />;

  console.log(data);

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
