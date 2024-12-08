// Formats the dates to a readable format (ex. January 1, 2023)
export const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
