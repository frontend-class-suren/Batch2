function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const currentDate = new Date(document.getElementById('currentDate').value || new Date());
    const resultElement = document.getElementById('result');

    if (isNaN(dob.getTime()) || isNaN(currentDate.getTime())) {
        resultElement.textContent = 'Please enter valid dates.';
        return;
    }

    let age = currentDate.getFullYear() - dob.getFullYear();
    let monthDiff = currentDate.getMonth() - dob.getMonth();
    let dayDiff = currentDate.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    resultElement.textContent = `Your age is ${age} years.`;
}