import convertToMilliseconds from '@/utils/convertToMilliseconds';

export default function sortQuestions(data, sortBy) {
  const sortedData = data.sort((a, b) => {
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
    if (sortBy === 'No. answers') return b.answers.length - a.answers.length;
    return 1;
  });

  return sortedData;
}
