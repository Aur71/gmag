import React from 'react';

// temo
import UnderDevelopment from '@/components/under_development/UnderDevelopment';

const termsAndConditions = () => {
  const underDevelopment = true;
  if (underDevelopment) return <UnderDevelopment />;

  return <div>termsAndConditions</div>;
};

export default termsAndConditions;
