function checkPrime() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(number) || number < 1) {
        resultElement.textContent = 'Please enter a valid positive number.';
        return;
    }

    if (number === 1) {
        resultElement.textContent = '1 is not a prime number.';
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            resultElement.textContent = `${number} is not a prime number.`;
            return;
        }
    }

    resultElement.textContent = `${number} is a prime number!`;
}