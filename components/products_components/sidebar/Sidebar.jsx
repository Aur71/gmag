import { useSelector } from 'react-redux';
import CloseFilters from './blocks/close_filters/CloseFilters';
import ActiveFilters from './blocks/active_filters/ActiveFilters';
import PriceFilter from './blocks/price_filter/PriceFilter';
import RatingFilter from './blocks/rating_filter/RatingFilter';
import SpecificationFilter from './blocks/specification_filter/SpecificationFilter';
import styles from './Sidebar.module.scss';
import getSidebarFilters from './getSidebarFilters';

const Sidebar = ({ products }) => {
  const showFilters = useSelector((state) => state.layout.showFilters);
  const { activeFilters, initialFilters } = useSelector(
    (state) => state.filtersSidebar
  );
  const filters = getSidebarFilters(activeFilters, products, initialFilters);

  return (
    <aside className={`${styles.sidebar} ${showFilters && styles.active}`}>
      <CloseFilters />
      {activeFilters.length ? <ActiveFilters /> : null}

      {filters.map((filter) => {
        const { name, options } = filter;
        const key = `${name}_block`;

        if (name === 'Price')
          return <PriceFilter key={key} name={name} options={options} />;

        if (name === 'Rating')
          return <RatingFilter key={key} name={name} options={options} />;

        return <SpecificationFilter key={key} name={name} options={options} />;
      })}
    </aside>
  );
};

export default Sidebar;
