import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAddLike } from '@/hooks/product_review/useAddLike';
import { useRemoveLike } from '@/hooks/product_review/useRemoveLike';
import styles from './Like.module.scss';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

const Like = ({ review }) => {
  const { likes } = review;
  const { user } = useSelector((state) => state.user);
  const [isLiked, setIsLiked] = useState(false);
  const { addLike, addLikeLoading } = useAddLike();
  const { removeLike, removeLikeLoading } = useRemoveLike();

  useEffect(() => {
    if (!user) return setIsLiked(false);
    const isReviewLiked = likes.some((id) => id === user._id);
    if (!isReviewLiked) return setIsLiked(false);
    if (isReviewLiked) return setIsLiked(true);
  }, [likes, user]);

  if (isLiked)
    return (
      <button
        className={styles.like}
        onClick={() => removeLike(review)}
        disabled={removeLikeLoading}
      >
        <AiFillLike className={styles.icon} />
        <span>({likes.length})</span>
      </button>
    );

  return (
    <button
      className={styles.like}
      onClick={() => addLike(review)}
      disabled={addLikeLoading}
    >
      <AiOutlineLike className={styles.icon} />
      <span>({likes.length})</span>
    </button>
  );
};

export default Like;
