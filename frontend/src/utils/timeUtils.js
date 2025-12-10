export const isWorkingTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const day = now.getDay();
  return day >= 1 && day < 5 && hours >= 9 && hours < 18;
};
