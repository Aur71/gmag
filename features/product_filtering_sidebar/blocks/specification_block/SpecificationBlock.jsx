import { useSelector } from 'react-redux';
import BlockHeader from '../block_components/block_header/BlockHeader';
import Option from '../block_components/option/Option';
import styles from './SpecificationBlock.module.scss';

const SpecificationBlock = ({ filter }) => {
  const { filterName, options } = filter;
  const { activeFilters } = useSelector(
    (state) => state.productFilteringSidebar
  );

  return (
    <div className={styles.specification_block}>
      <BlockHeader name={filterName} dependencies={[options, activeFilters]} />

      <div className={styles.options}></div>
    </div>
  );
};

export default SpecificationBlock;
