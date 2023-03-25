export default function formatDate(milliseconds) {
  let date = new Date(milliseconds);
  let options = { month: 'short', day: 'numeric', year: 'numeric' };
  let formattedDate = date.toLocaleString('en-US', options);
  return formattedDate;
}
