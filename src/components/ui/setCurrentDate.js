export function getCurrentDate() {
    // Create a new Date object for the current date and time
    const currentDate = new Date();
  
    // Define arrays for day names and month names
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    // Get day, month, date, and year
    const dayName = dayNames[currentDate.getDay()];
    const monthName = monthNames[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    // Construct the formatted date string
    const formattedDate = `${dayName}, ${monthName} ${date}, ${year}`;
  
    return formattedDate;
  }  