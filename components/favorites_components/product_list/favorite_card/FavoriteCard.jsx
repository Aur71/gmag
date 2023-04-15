import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FavoriteCard.module.scss';
import { BiChevronDown } from 'react-icons/bi';
import { FaOpencart } from 'react-icons/fa';
import { moveProduct, removeProduct } from '@/redux/reducers/favoritesSlice';

const FavoriteCard = ({ product }) => {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const btnRef = useRef(null);
  const { lists } = useSelector((state) => state.favorites);
  const [productLocation, setProductLocation] = useState(null);
  const { productType, id, img, name, totalStock, currentPrice, oldPrice } =
    product;
  const [showDropdown, setShowDropdown] = useState(false);
  const link = `/products/${productType}/${id}`;
  const inStock = totalStock > 5;
  const lastProducts = totalStock < 5 && totalStock > 1;
  const lastProduct = totalStock === 1;
  const outOfStock = totalStock === 0;

  // const productLocation = lists.find((list) => {
  //   const { listName, products } = list;
  //   if (listName === 'All products') return;
  //   const isProductInThisList = products.some((product) => product.id === id);
  //   if (isProductInThisList) return list;
  // });

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !btnRef.current.contains(event.target) &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    lists.forEach((list) => {
      const { listName, products } = list;
      if (listName === 'All products') return;
      const isProductInThisList = products.some((product) => product.id === id);
      if (isProductInThisList) setProductLocation(list);
    });
  }, [lists, id]);

  return (
    <article className={styles.favorite_card}>
      <Link href={link} className={styles.img_container}>
        <Image src={img} alt={name} width={150} height={150} />
      </Link>

      <div className={styles.wrapper}>
        <div className={styles.title_container}>
          <h5>
            List: <span>{productLocation ? productLocation.listName : ''}</span>
          </h5>
          <h4>
            <Link href={link}>{name}</Link>
          </h4>

          <div className={styles.btns_container}>
            <button onClick={() => setShowDropdown(!showDropdown)} ref={btnRef}>
              Move <BiChevronDown className={styles.icon} />
            </button>
            <button
              onClick={() =>
                dispatch(
                  removeProduct({ id, listName: productLocation.listName })
                )
              }
            >
              Remove
            </button>

            <div
              className={`${styles.dropdown} ${showDropdown && styles.active}`}
              ref={dropdownRef}
            >
              {lists.map((list) => {
                if (list.listName === 'All products') return;

                const key = `${list.listName}_btn`;
                return (
                  <button
                    key={key}
                    className={`${
                      productLocation
                        ? productLocation.listName === list.listName &&
                          styles.active
                        : null
                    }`}
                    onClick={() => {
                      dispatch(
                        moveProduct({
                          id,
                          listName: productLocation.listName,
                          moveTo: list.listName,
                          product: product,
                        })
                      );
                      setShowDropdown(false);
                    }}
                  >
                    {list.listName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.actions_container}>
          <p
            className={`${inStock && styles.green} ${
              outOfStock && styles.red
            } ${lastProducts && styles.orange} ${lastProduct && styles.orange}`}
          >
            {inStock && 'in stock'}
            {outOfStock && 'out of stock'}
            {lastProduct && 'last product'}
            {lastProducts &&
              `last ${totalStock} ${totalStock === 1 ? 'product' : 'products'}`}
          </p>
          {oldPrice ? <h5>${oldPrice}</h5> : null}
          <h4>${currentPrice}</h4>
          <button>
            <span>Add to cart</span> <FaOpencart className={styles.icon} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default FavoriteCard;
