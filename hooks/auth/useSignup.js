import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SIGNUP } from '@/redux/reducers/userSlice';

export const useSignup = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (email, password) => {
    localStorage.removeItem('favorites');
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/v1/auth/signup`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      }
    );
    const user = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(user.error);
    }
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(SIGNUP(user));
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
