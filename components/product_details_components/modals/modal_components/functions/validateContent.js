export default function validateContent(content) {
  if (!content.length) return { error: `can't be empty` };
  return true;
}
