export default function filterReviews(reviews, filterBy, user) {
  const filteredData = reviews.filter((review) => {
    if (filterBy === 'All reviews') return true;
    if (filterBy === '5 stars reviews') return review.stars === 5;
    if (filterBy === '4 stars reviews') return review.stars === 4;
    if (filterBy === '3 stars reviews') return review.stars === 3;
    if (filterBy === '2 stars reviews') return review.stars === 2;
    if (filterBy === '1 star reviews') return review.stars === 1;
    if (filterBy === 'My reviews') return review?.postedBy?._id === user?._id;
    return false;
  });

  return filteredData;
}
