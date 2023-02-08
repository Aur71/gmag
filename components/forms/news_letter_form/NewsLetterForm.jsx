import styles from './NewsLetterForm.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import img from '../../../public/news-letter.jpg';

const NewsLetterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.center}>
        <Image src={img} alt='2 grils using the laptop' priority={true} />

        <form onSubmit={handleSubmit}>
          <h2>
            Subscribe to the GMAG newsletter and find out about the limited-time
            discounts!
          </h2>

          <h3>
            By subscribing to the eMAG newsletter, I confirm that I am over 16
            years old.
          </h3>

          <div className={styles.input_container}>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type='submit'>Subscribe!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterForm;
