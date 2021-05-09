
// var is_weekend =  function(date1){
//     var dt = new Date(date1);
     
//     if(dt.getDay() == 6 || dt.getDay() == 0)
//        {
//         return true;
//         } 
//   }

  // console.log(is_weekend('Mar 29, 2021'));

// month days year
//   var start = new Date("03/12/2021");
//   var end = new Date("03/21/2021");

  const start = new Date(new Date().getFullYear(), 0, 1);

  
  const end = new Date(start.getFullYear()+1,0,1);

  console.log("start " +start);
  console.log("end " +end);

// const date2 = new Date();
// console.log(isLegalHoliday(date2) + "it is");

// function isLegalHoliday(date3){
//   var dt = new Date(date3);
//   if(legalHolidays.includes(Date(dt)))
//   return true;
// }



  for (var d = start; d <= end; d.setDate(d.getDate() + 1)) {
    if(d.getDay() == 6 || d.getDay() == 0){
     
    console.log(d.getDate() + "is weekend");
    }
  }
  //   else console.log(d.getDate()+ " is workday")
  // }