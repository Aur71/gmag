import { useState } from 'react';
import { useSelector } from 'react-redux';
import BlockHeader from '../block_components/block_header/BlockHeader';
import BlockSearchbar from '../block_components/block_searchbar/BlockSearchbar';
import Option from '../block_components/option/Option';
import styles from './SpecificationBlock.module.scss';

const SpecificationBlock = ({ filter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { filterName, options } = filter;
  const { activeFilters } = useSelector(
    (state) => state.productFilteringSidebar
  );

  const filteredOptions = options.filter((option) => {
    if (!searchTerm) return true;
    const optionName = option.option.toString().toLowerCase();
    if (!optionName) return false;
    return optionName.includes(searchTerm.toString().toLowerCase());
  });

  return (
    <div className={styles.specification_block}>
      <BlockHeader name={filterName} dependencies={[options, activeFilters]} />

      <div>
        {options.length > 5 ? (
          <BlockSearchbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        ) : null}

        <div className={styles.options}>
          {filteredOptions.map((option) => {
            return (
              <Option key={option.option} option={option} filter={filter} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpecificationBlock;
