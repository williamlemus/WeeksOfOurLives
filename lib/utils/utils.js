const MS_IN_DAYS = 86400000;

export const now = ()=>{
  const dateTime = new Date();
  return `${dateTime.getFullYear()}-${dateTime.getMonth() + 1}-${dateTime.getDate()}`;
}

export const totalDays = (date, firstDate)=>{
  return Math.floor((new Date(date) - new Date(firstDate))/MS_IN_DAYS);
}

export const formatToWD = (date, firstDate) =>{
  const timeSince = totalDays(date, firstDate);
  const day = date > firstDate ? 1 + timeSince % 7 : 7 - (-(timeSince + 1) % 7);
  return `W${Math.floor(1 + timeSince/7)}D${day}`;
}
