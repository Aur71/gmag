import styles from './RatingBlock.module.scss';
import { useState, useEffect } from 'react';
import BlockHeader from '../block_components/block_header/BlockHeader';
import { BsStarFill } from 'react-icons/bs';

const RatingBlock = ({ name, options }) => {
  const [stars, setStars] = useState([
    {
      id: 1,
      value: 5,
      count: 0,
    },

    {
      id: 2,
      value: 4,
      count: 0,
    },

    {
      id: 3,
      value: 3,
      count: 0,
    },

    {
      id: 4,
      value: 2,
      count: 0,
    },

    {
      id: 5,
      value: 1,
      count: 0,
    },
  ]);

  // ADD THE COUNT FROM THE FINDCOMONPROPS FUNCTION

  const handleCheckBox = (e) => {
    const value = Number(e.target.value);
    console.log(value);
    if (e.target.checked) {
      // if is true dispath an action that filters based on rating(value)
    } else {
      // dispath an action that removes the filter
    }
  };

  //CHANGES THE COUNT OF EVERY OPTION BASED ON THE CURRENT DATA
  const updateCount = () => {
    options.forEach((option) => {
      const roundedValue = Math.round(option.name);
      const valueCount = option.count;

      const updatedStars = stars.map((item) => {
        if (item.value === roundedValue) {
          item.count += valueCount;
        }

        return item;
      });

      setStars(updatedStars);
    });
  };

  useEffect(() => {
    // I`M USING A CLEAN UP FUNCTION BECUSE THIS CODE IS RAN TWICE, THE FUNCTION WILL RUN WHEN THE COMPONENT UNMOUNTS THE FIRST
    return () => updateCount();
  }, []);

  return (
    <div className={styles.rating_block}>
      <BlockHeader name={name} />

      <div className={styles.options}>
        {stars.map((item) => {
          const { value, id, count } = item;

          return (
            <div className={styles.option} key={id}>
              <input type='checkbox' value={value} onChange={handleCheckBox} />

              <div className={styles.stars_container}>
                <BsStarFill className={`${value >= 1 && styles.active_star}`} />
                <BsStarFill className={`${value >= 2 && styles.active_star}`} />
                <BsStarFill className={`${value >= 3 && styles.active_star}`} />
                <BsStarFill className={`${value >= 4 && styles.active_star}`} />
                <BsStarFill className={`${value >= 5 && styles.active_star}`} />
                <span>({count})</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingBlock;
