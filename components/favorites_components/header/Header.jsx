import TitleContainer from './title_container/TitleContainer';
import ListsContainer from './lists_container/ListsContainer';
import ListActions from './list_actions/ListActions';
import FiltersContainer from './filters_container/FiltersContainer';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <TitleContainer />
      <ListsContainer />
      <ListActions />
      <FiltersContainer />
    </div>
  );
};

export default Header;
