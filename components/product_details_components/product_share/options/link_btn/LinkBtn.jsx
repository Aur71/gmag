import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './LinkBtn.module.scss';
import { AiOutlineLink } from 'react-icons/ai';

const LinkBtn = () => {
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`gmag${router.asPath}`);
    setIsCopied(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <button className={styles.link_btn} onClick={copyToClipboard}>
      <AiOutlineLink className={styles.icon} />
      <span>{isCopied ? 'link copied' : `gmag${router.asPath}`}</span>
    </button>
  );
};

export default LinkBtn;
