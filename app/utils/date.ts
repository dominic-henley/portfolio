const months : Record<string, string> = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
}

/* 
  @param date will be of the Moment.js format of YYYY-MM-DD
  @return parsed date of format MMM-YYYY (Jun 2020, Mar 2019 etc.)
*/
export const parseDate = (date: string) : string => {
  const slicedDate = date.substring(0, date.length - 3) // YYYY-MM
  
  const year = slicedDate.substring(0, 4)
  const month = slicedDate.substring(5, slicedDate.length);
  
  let ret = `${months[month]} ${year}`
  
  return ret;
} 

