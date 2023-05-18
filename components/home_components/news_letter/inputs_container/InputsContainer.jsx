import { useState } from 'react';
import { useSubscribeToNewsLetter } from '@/hooks/news_letter/useSubscribeToNewsLetter';
import styles from './InputsContainer.module.scss';

const InputsContainer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { subscribe, isLoading } = useSubscribeToNewsLetter();

  const subscribeUser = (e) => {
    e.preventDefault();
    subscribe(name, email, setName, setEmail);
  };

  return (
    <div className={styles.inputs_container}>
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
      <button onClick={subscribeUser} disabled={isLoading}>
        Subscribe
      </button>
    </div>
  );
};

export default InputsContainer;
