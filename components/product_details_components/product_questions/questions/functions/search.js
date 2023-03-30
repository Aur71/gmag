export default function search(data, searchTerm) {
  const searchedData = data.filter((item) => {
    if (!searchTerm) return true;
    const hasQuestion = item.question
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return hasQuestion;
  });

  return searchedData;
}
