export const getDateAbbreviation = (date: Date | null): string => {
  if (!date) {
    return 'PRESENT';
  }
  return date
    .toLocaleString('en-us', { month: 'short', year: 'numeric' })
    .toUpperCase();
};
