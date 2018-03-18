const MS_IN_DAYS = 86400000;

export const now = ()=>{
  const dateTime = new Date();
  return `${dateTime.getFullYear()}-${dateTime.getMonth() + 1}-${dateTime.getDate()}`;
}

export const totalDays = (date, firstDate)=>{
  return Math.floor((new Date(date) - new Date(firstDate))/MS_IN_DAYS);
}

export const formatToWD = (date, firstDate) =>{
  const days = totalDays(date, firstDate);
  return `W${Math.floor(1 + days/7)}D${1 + days % 7}`;
}
