export default function convertToMilliseconds(dateString) {
  const date = new Date(dateString);
  return date.getTime();
}
