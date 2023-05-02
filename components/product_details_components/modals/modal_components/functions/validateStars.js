export default function validateStars(stars) {
  if (!stars) return { error: 'Add rating' };
  return true;
}
