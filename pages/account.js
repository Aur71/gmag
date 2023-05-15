import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

// temp
import UnderDevelopment from '@/components/under_development/UnderDevelopment';

const Account = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) router.push('/login');
  }, [user, router]);

  const underDevelopment = true;
  if (underDevelopment) return <UnderDevelopment />;

  return <div>account</div>;
};

export default Account;
