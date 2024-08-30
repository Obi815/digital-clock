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
            hrs = hour - 12; 
        }
    }

}