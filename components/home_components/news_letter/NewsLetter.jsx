import { useState } from 'react';
import Image from 'next/image';
import styles from './NewsLetter.module.scss';

const NewsLetter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.news_letter}>
      <div className={styles.center}>
        <Image
          src='/news-letter.jpg'
          alt='2 grils using the laptop'
          priority={true}
          width={400}
          height={220}
        />

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

export default NewsLetter;
