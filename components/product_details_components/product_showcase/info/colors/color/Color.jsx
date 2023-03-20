import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Color.module.scss';
import { handleActiveColor } from '@/redux/reducers/singleProductSlice';

const Color = ({ color }) => {
  const dispatch = useDispatch();
  const colorContainerRef = useRef(null);
  const { activeColor } = useSelector((state) => state.singleProduct);

  useEffect(() => {
    colorContainerRef.current.style.backgroundColor = color.color;
  }, [color]);

  return (
    <div className={`${styles.color} ${!color.stock && styles.disabled}`}>
      <button onClick={() => dispatch(handleActiveColor(color))}>
        <span ref={colorContainerRef}></span>
        {color.name}
      </button>
      <div
        className={`${activeColor?.name === color.name && styles.active}`}
      ></div>
    </div>
  );
};

export default Color;
