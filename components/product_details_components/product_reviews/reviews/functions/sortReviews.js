import convertToMilliseconds from '@/utils/convertToMilliseconds';

export default function sortReviews(reviews, sortBy) {
  const sortedReviews = reviews.sort((a, b) => {
    if (sortBy === 'Newest') {
      const bDate = convertToMilliseconds(b.createdAt);
      const aDate = convertToMilliseconds(a.createdAt);
      return bDate - aDate;
    }
    if (sortBy === 'Oldest') {
      const aDate = convertToMilliseconds(a.createdAt);
      const bDate = convertToMilliseconds(b.createdAt);
      return aDate - bDate;
    }
    if (sortBy === 'No. likes') return b.likes.length - a.likes.length;
    if (sortBy === 'No. comments') return b.comments.length - a.comments.length;
    return 1;
  });

  return sortedReviews;
}
