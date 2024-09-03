function Time() {
    // Creating object of the Date Class //
    let date = new Date();

    // Getting the current hour //
    let hrs = date.getHours();
    // Minutes //
    let min = date.getMinutes();
    // Seconds //
    let sec = date.getSeconds();

    // Variable to store AM / PM //
    let period = "";

    // Logic to find AM / PM
    if (hrs >= 12) {
        period = "PM"; 
    } else {
        period = "AM";
    }

    // Converting into 12 hour clock // 
    if (hrs == 0) {
        hrs = 12;
    } else {
        if (hrs > 12) {
            hrs = hrs - 12; 
        }
    }
    //updating hours, minutes, seconds //
    hrs = update(hrs);
    min = update(min);
    sec = update(sec);

    // Adding elements to the div in the html //
    document.getElementById("digital-clock").innerText = hrs + " : " + min + " : " + sec + "  " + period;
   

    // Set timer to 1 sec //
    setTimeout(Time, 1000);
}

// A Function to update time elements if they are less than 10 //
// Append 0 before time elements if they are less than 10 //
function update(t) {
    if (t < 10) {
        return "0" + t;
    } else {
        return t; 
    }
}
Time();