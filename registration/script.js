const date = new Date();
const date2 = new Date();
const date4= new Date();
const legalHolidays = ["4/08/2021","4/06/2021"];
const legalOne=  new Date(legalHolidays[0]);
const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";


  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      date2.setDate(i);
      date2.setMonth(date.getMonth())
      // date4.setDate(i);
      // date4.setMonth(date2.getMonth());
   
      if( is_weekend(date2)){
        days += `<div class="weekend">${i}</div>`;
      }
     
      else if(  i === 
        .getDate() &&
      date2.getMonth() === legalOne.getMonth())
      {
        days += `<div class="legalHolidays">${i}</div>`;
      }
      else days += `<div>${i}</div>`;
    }
       
  }

//   for (let i = 1; i <= lastDay; i++) {
// date4.setDate(i);
// date4.setMonth(date2.getMonth());
// console.log(legalOne)
//     if(  i === legalOne.getDate() &&
//       date4.getMonth() === legalOne.getMonth())
//       {
//         days += `<div class="legalHolidays">${i}</div>`;
//       }
//   }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

var is_weekend =  function(date1){
  var dt = new Date(date1);
   
  if(dt.getDay() == 6 || dt.getDay() == 0)
     {
      return true;
      } 
}



function isLegalHoliday(date1){
  var dt = new Date(date1);
  legalHolidays.forEach(function(entry) {
    var entryDate = new Date(entry);
    console.log( entryDate.getDate() +"  " +  entryDate.getMonth());
    if(  dt.getDate === entryDate.getDate() &&
      dt.getMonth() ===entryDate.getMonth())
      console.log( "****");
});
}

// isLegalHoliday("4/06/2021");
isLegalHoliday("4/08/2021");
renderCalendar();

