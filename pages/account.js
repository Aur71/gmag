import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Account = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) router.push('/login');
  }, [user, router]);

  //   add loading
  return <div>account</div>;
};

export default Account;
