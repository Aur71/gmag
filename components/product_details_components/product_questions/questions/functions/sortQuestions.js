export default function sortQuestions(data, sortBy) {
  const sortedData = data.sort((a, b) => {
    if (sortBy === 'Newest') return b.postedOn - a.postedOn;
    if (sortBy === 'Oldest') return a.postedOn - b.postedOn;
    if (sortBy === 'No. answers') return b.answers.length - a.answers.length;
    return 1;
  });

  return sortedData;
}
