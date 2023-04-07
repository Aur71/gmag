import { useSelector } from 'react-redux';
import Card from './card/Card';
import styles from './Cards.module.scss';

const Cards = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <section className={styles.cards}>
      {cart.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </section>
  );
};

export default Cards;
