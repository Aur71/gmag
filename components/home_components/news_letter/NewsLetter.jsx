import ImgContainer from './img_container/ImgContainer';
import TextContainer from './text_container/TextContainer';
import InputsContainer from './inputs_container/InputsContainer';
import styles from './NewsLetter.module.scss';

const NewsLetter = () => {
  return (
    <div className={styles.news_letter}>
      <div className={styles.center}>
        <ImgContainer />

        <form>
          <TextContainer />
          <InputsContainer />
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
