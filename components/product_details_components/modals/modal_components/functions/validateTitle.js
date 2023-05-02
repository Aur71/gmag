export default function validateTitle(title) {
  if (!title.length) return { error: `can't be empty` };
  return true;
}
