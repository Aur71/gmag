import styles from './ProductsPagination.module.scss';
import { useState, useRef, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const ProductsPagination = () => {
  const buttonsContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = 20;
  const buttons = [];

  const handlePage = (num) => {
    setCurrentPage(num);
    const buttonWidth =
      buttonsContainerRef.current.children[0].getBoundingClientRect().width;
    buttonsContainerRef.current.scrollLeft =
      num * buttonWidth - buttonWidth * 2;
  };

  const checkNum = (num) => {
    if (num <= 0) return 1;
    if (num > pages) return pages;
    return num;
  };

  const pageDecrease = () => {
    setCurrentPage(checkNum(currentPage - 1));
    const buttonWidth =
      buttonsContainerRef.current.children[0].getBoundingClientRect().width;
    buttonsContainerRef.current.scrollLeft -= buttonWidth;
  };

  const pageIncrease = () => {
    setCurrentPage(checkNum(currentPage + 1));
    const buttonWidth =
      buttonsContainerRef.current.children[0].getBoundingClientRect().width;
    buttonsContainerRef.current.scrollLeft += buttonWidth;
  };

  for (let i = 1; i <= pages; i++) {
    buttons.push(
      <button key={i} onClick={() => handlePage(i)}>
        <span className={`${currentPage === i && styles.active}`}>{i}</span>
      </button>
    );
  }

  useEffect(() => {
    const buttonWidth =
      buttonsContainerRef.current.children[0].getBoundingClientRect().width;

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
