export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const difference = now.getTime() - date.getTime();

  if (difference < 60000) {
    return 'a few seconds ago';
  }

  if (difference < 120000) {
    return 'a minute ago';
  }

  if (difference < 120000 * 60 * 24) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'pm' : 'am';
    const hourIn12Format = hours > 12 ? hours - 12 : hours;
    const minutesWithLeadingZero = minutes < 10 ? `0${minutes}` : minutes;

    return `${hourIn12Format}:${minutesWithLeadingZero} ${period}`;
  }

  return date.toLocaleString();
};
