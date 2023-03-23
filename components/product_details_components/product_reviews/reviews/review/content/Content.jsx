import styles from './Content.module.scss';
import { BsStarFill } from 'react-icons/bs';

const Content = () => {
  const rating = 4;

  return (
    <div className={styles.content}>
      <h3>Very good</h3>
      <div className={styles.stars_container}>
        <BsStarFill className={`${1 <= rating && styles.active_star}`} />
        <BsStarFill className={`${2 <= rating && styles.active_star}`} />
        <BsStarFill className={`${3 <= rating && styles.active_star}`} />
        <BsStarFill className={`${4 <= rating && styles.active_star}`} />
        <BsStarFill className={`${5 <= rating && styles.active_star}`} />
      </div>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eius
        excepturi possimus reiciendis explicabo neque numquam a cupiditate.
        Velit vero eligendi laborum dicta sint minus ipsum tempore voluptatem
        incidunt maxime nulla blanditiis facilis quis, aspernatur veniam culpa
        quod dolor doloremque id nisi earum magnam quibusdam vel! Omnis impedit
        natus tenetur.
      </p>
    </div>
  );
};

export default Content;
