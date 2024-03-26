// The Date object is used to work with dates & times

let date = new Date();
console.log(date);        // Sat Jul 15 2023 23:07:46 GMT-0300 (Argentina Standard Time)
date = date.toLocaleDateString();
console.log(date);        // 7/15/2023

/* INIC
      let date = new Date(0);
      let date = new Date(2023, 0, 1, 2, 3, 4, 5);
      let date = new Date("January 1, 2023 00:00:00");
 */
/* SET
      date.setFullYear(2024);
      date.setMonth(11);
      date.setDate(31);
      date.setHours(23);
      date.setMinutes(1);
      date.setSeconds(30);
      date.setMilliseconds(0);
*/
/* GET
      let Y/M/D = date.toLocaleDateString();
      let year  = date.getFullYear();
      let dayOfMonth = date.getDate();
      let dayOfWeek  = date.getDay();
      let month = date.getMonth();
      let hour  = date.getHours();
      let H:M:S = date.toLocaleTimeString;
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let ms = date.getMilliseconds();
*/


date = new Date(0);                       // UNIX time 0 = 1969
document.getElementById("myLabel").innerHTML = date;
// Wed Dec 31 1969 21:00:00 GMT-0300 (Argentina Standard Time)
now = performance.timeOrigin +(24*3600)*1000
date = new Date(now);                   // UNIX time TOMORROW
document.getElementById("myLabel").innerHTML = date;
// Wed Dec 31 1969 21:00:00 GMT-0300 (Argentina Standard Time)


function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`
}
function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}