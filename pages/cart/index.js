// import Title from '@/components/cart_components/title/Title';
// import Cards from '@/components/cart_components/cards/Cards';
// import Ticket from '@/components/cart_components/ticket/Ticket';
// import Recommendations from '@/components/cart_components/recommendations/Recommendations';
// import axios from 'axios';
import styles from '../../styles/pages/Cart.module.scss';

// temp
import UnderDevelopment from '@/components/under_development/UnderDevelopment';

const Cart = () => {
  const underDevelopment = true;
  if (underDevelopment) return <UnderDevelopment />;

  return (
    <div className={styles.cart}>
      {/* <div className={styles.center}>
        <Title />
        <Cards />
        <Ticket />
      </div> */}
    </div>
  );
};

export default Cart;

export const getServerSideProps = async () => {
  try {
    // FETCHING THE DATA BASED ON THE URL
    // const res = await axios.get(`api/products/${params.type}/${params.id}`);
    const data = ['fetch user cart data'];

    // DISPATCH THE ACTION TO UPDATE THE REDUX STATE WITH THE FETCHED DATA

    return { props: { data } };
  } catch (error) {
    return { props: { data: [] } };
  }
};
