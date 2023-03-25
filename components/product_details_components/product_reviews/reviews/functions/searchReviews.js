export default function searchReviews(reviews, searchTerm) {
  const searchedReviews = reviews.filter((review) => {
    if (!searchTerm) return true;
    const { title, content } = review;
    const hasTitle = title.toLowerCase().includes(searchTerm.toLowerCase());
    const hasContent = content.toLowerCase().includes(searchTerm.toLowerCase());
    if (hasTitle || hasContent) return true;
  });

  return searchedReviews;
}
