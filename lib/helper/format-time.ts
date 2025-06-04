export const formatTime = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Asia/Dhaka',
    hour12: false,
    timeZoneName: 'short',
  }

  const formattedDate = new Date(date).toLocaleString('en-US', options)
  return formattedDate
}