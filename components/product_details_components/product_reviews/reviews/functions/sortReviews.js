export default function sortReviews(reviews, sortBy) {
  const sortedReviews = reviews.sort((a, b) => {
    if (sortBy === 'Newest') return b.postedOn - a.postedOn;
    if (sortBy === 'Oldest') return a.postedOn - b.postedOn;
    if (sortBy === 'No. likes') return b.likes - a.likes;
    if (sortBy === 'No. comments') return b.comments.length - a.comments.length;
    return 1;
  });

  return sortedReviews;
}
