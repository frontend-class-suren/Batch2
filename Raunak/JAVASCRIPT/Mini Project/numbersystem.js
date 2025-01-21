function convertNumber() {
    const fromBase = parseInt(document.getElementById('fromBase').value);
    const toBase = parseInt(document.getElementById('toBase').value);
    const inputValue = document.getElementById('inputValue').value.trim();
    const resultElement = document.getElementById('result');

    try {
        if (inputValue === '') {
            resultElement.textContent = 'Please enter a value.';
            return;
        }
        const decimalValue = parseInt(inputValue, fromBase);
        if (isNaN(decimalValue)) {
            resultElement.textContent = 'Invalid input for the selected base.';
            return;
        }
        const convertedValue = decimalValue.toString(toBase).toUpperCase();
        resultElement.innerHTML = `<p>Converted Value: <strong>${convertedValue}</strong></p>`;
    } catch (error) {
        resultElement.textContent = 'Error in conversion. Please check the input.';
    }
}