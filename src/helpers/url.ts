export const beautifyUrl = (string?: string) => {
  if (!string) return '';
  let s = string.trim().replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');
  s = s.endsWith('/') ? s.slice(0, -1) : s;
  return s;
};
