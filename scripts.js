function currentTime() {
    // Defining a function called "currentTime" //

    // storing variable "date" //
    let date = new Date();

    // extracting hours, minutes, seconds from variable date //
    // hrs, min, sec are stored in variable "date" // 
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    // creating a variable to store AM //
    let session = "AM"

    if(hrs == 0) {
        hrs = 12;
    }
    if(hrs > 12) {
        hrs = hrs - 12;
        session = "PM"
    }
}