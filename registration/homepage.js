const useriDBredirect = document.getElementById("useriDB");
const cursuriInceput = document.getElementById("cursuriInceputeID");
const calendarRedirect = document.getElementById("calendar");

useriDBredirect.addEventListener("click", (e) => {
    e.preventDefault();
    window.location = "https://localhost/licenta/registration/useriDB.php";
})

cursuriInceput.addEventListener("click", (e) => {
    e.preventDefault();
    window.location = "https://localhost/licenta/registration/cursuriInc.php";
})

calendarRedirect.addEventListener("click", (e) => {
    e.preventDefault();
    window.location = "https://localhost/licenta/registration/calendar.html";
})
