function moveNext(current, nextId) {
    if (current.value.length === 1) {
        document.getElementById(nextId)?.focus();
    }
}

function getOTP() {
    const otp = Array.from(document.querySelectorAll('.otp-inputs input'))
        .map(input => input.value)
        .join('');
    if (otp.length === 6) {
        alert(`Your OTP is: ${otp}`);
    } else {
        alert('Please enter all 6 digits of the OTP.');
    }
}