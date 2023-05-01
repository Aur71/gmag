export default function getCurrentTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  let formattedTime = `${hours % 12 || 12}:${minutes
    .toString()
    .padStart(2, '0')}`;
  formattedTime += hours >= 12 ? ' PM' : ' AM';

  return formattedTime;
}
