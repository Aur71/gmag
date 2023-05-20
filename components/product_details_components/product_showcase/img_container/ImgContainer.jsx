import ImgSlider from './img_slider/ImgSlider';
import ActiveImg from './active_img/ActiveImg';
import styles from './ImgContainer.module.scss';

const ImgContainer = ({ product }) => {
  const { images } = product;

  return (
    <div className={styles.img_container}>
      <ImgSlider images={images} />
      <ActiveImg images={images} />
    </div>
  );
};

export default ImgContainer;
