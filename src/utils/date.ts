export const formatDateTime = (date: string) => {
  const taskDate = new Date(date);
  const hours = taskDate.getHours().toString().padStart(2, "0");
  const minutes = taskDate.getMinutes().toString().padStart(2, "0");
  return `${taskDate.toLocaleDateString()} ${hours}:${minutes}`;
};