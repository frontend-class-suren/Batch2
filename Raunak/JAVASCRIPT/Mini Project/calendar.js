const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar() {
    const monthYearText = document.getElementById("monthYear");
    const calendarDays = document.getElementById("calendarDays");
    
    monthYearText.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Get the first day of the current month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const lastDayOfMonth = lastDateOfMonth.getDate();

    // Get the day of the week of the first day of the month (0-6, Sunday-Saturday)
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Clear previous days
    calendarDays.innerHTML = "";

    // Create empty spaces for days before the start of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("empty");
        calendarDays.appendChild(emptyDiv);
    }

    // Create day cells for the current month
    for (let day = 1; day <= lastDayOfMonth; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = day;
        dayDiv.classList.add("day");

        // Highlight today's date
        if (day === currentDate.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
            dayDiv.classList.add("today");
        }

        calendarDays.appendChild(dayDiv);
    }
}

function changeMonth(direction) {
    currentMonth += direction;
    
    // Handle year change if month goes out of bounds
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    
    renderCalendar();
}

// Initialize the calendar on page load
renderCalendar();