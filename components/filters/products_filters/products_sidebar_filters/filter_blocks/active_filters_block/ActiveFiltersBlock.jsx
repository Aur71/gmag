import styles from './ActiveFiltersBlock.module.scss';
import BlockHeader from '../block_components/block_header/BlockHeader';
import { IoClose } from 'react-icons/io5';

// TEMP DATA
const activeFilters = [
  {
    category: 'Processor Manufacturer',
    options: ['Intel'],
  },
  {
    category: 'Processor',
    options: ['Intel Core i7-11400', 'Intel Core i7-11400'],
  },

  {
    category: 'Video Card Model',
    options: ['Nvidia GeForce RTX 3060 Ti'],
  },
];

const ActiveFiltersBlock = () => {
  return (
    <div className={styles.active_filters_block}>
      <BlockHeader name='Active filters' />

      <div className={styles.active_filters_container}>
        <button>Clear all filters</button>

        <ul>
          {activeFilters.map((item, index) => {
            return (
              <li key={index}>
                <h5>{item.category}:</h5>

                {item.options.map((option, index) => {
                  return (
                    <button key={index}>
                      <span>{option}</span>
                      <IoClose className={styles.icon} />
                    </button>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ActiveFiltersBlock;
