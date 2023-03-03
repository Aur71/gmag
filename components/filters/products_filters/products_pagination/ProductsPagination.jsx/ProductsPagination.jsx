import styles from './ProductsPagination.module.scss';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleCurrentPage } from '@/redux/reducers/productsSlice';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const ProductsPagination = () => {
  const buttons = [];
  const buttonsContainerRef = useRef(null);
  const dispatch = useDispatch();
  const { currentPage, pages } = useSelector((state) => state.products);

  // CHANGEING THE PAGE WHEN A BUTTON IS CLICKED
  const handlePage = (num) => {
    dispatch(handleCurrentPage(num));
    const buttonWidth =
      buttonsContainerRef.current.children[0].getBoundingClientRect().width;
    buttonsContainerRef.current.scrollLeft =
      num * buttonWidth - buttonWidth * 2;
  };

  // DECREASEING THE PAGE ON CLICK
  const pageDecrease = () => {
    dispatch(handleCurrentPage(currentPage - 1));
    const buttonWidth =
      buttonsContainerRef.current.children[0].getBoundingClientRect().width;
    buttonsContainerRef.current.scrollLeft -= buttonWidth;
  };

  // INCREASEING THE PAGE ON CLICK
  const pageIncrease = () => {
    dispatch(handleCurrentPage(currentPage + 1));
    const buttonWidth =
      buttonsContainerRef.current.children[0].getBoundingClientRect().width;
    buttonsContainerRef.current.scrollLeft += buttonWidth;
  };

  // CREATING BUTTONS BASED ON THE NUMBER OF PAGES
  for (let i = 1; i <= pages; i++) {
    buttons.push(
      <button key={i} onClick={() => handlePage(i)}>
        <span className={`${currentPage === i && styles.active}`}>{i}</span>
      </button>
    );
  }

  // SETTING THE WIDTH OF BUTTONS_CONTAINER BASED ON THE NUMBER OF PAGES
  useEffect(() => {
    const buttonWidth =
      buttonsContainerRef.current.children[0]?.getBoundingClientRect().width;

    if (pages < 3) {
      buttonsContainerRef.current.style.width = `${buttonWidth * pages}px`;
    } else {
      buttonsContainerRef.current.style.width = `${buttonWidth * 3}px`;
    }
  }, [pages]);

  return (
    <div className={styles.products_pagination}>
      <button onClick={pageDecrease}>
        <AiOutlineLeft className={styles.icon} />
      </button>

      {currentPage >= pages - 1 && pages > 3 ? (
        <>
          <button onClick={() => handlePage(1)}>1</button>
          <button className={styles.disabled}>...</button>
        </>
      ) : null}

      <div className={styles.buttons_container} ref={buttonsContainerRef}>
        {buttons}
      </div>

      {currentPage <= pages - 2 && pages > 3 ? (
        <>
          <button className={styles.disabled}>...</button>
          <button onClick={() => handlePage(pages)}>{pages}</button>
        </>
      ) : null}

      <button onClick={pageIncrease}>
        <AiOutlineRight className={styles.icon} />
      </button>
    </div>
  );
};

export default ProductsPagination;
