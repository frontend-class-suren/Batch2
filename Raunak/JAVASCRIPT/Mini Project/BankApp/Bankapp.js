let balance = 0, loan = 0;

const balanceDisplay = document.getElementById('balance');
const loanDisplay = document.getElementById('loan');

const openAccount = document.getElementById('openAccount');
const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');
const requestLoan = document.getElementById('requestLoan');
const payLoan = document.getElementById('payLoan');
const closeAccount = document.getElementById('closeAccount');

function updateUI() {
    balanceDisplay.textContent = balance;
    loanDisplay.textContent = loan;
    closeAccount.disabled = balance !== 0 || loan !== 0; // Enable only when both are 0
}

function disableAllExceptOpen() {
    deposit.disabled = withdraw.disabled = requestLoan.disabled = payLoan.disabled = closeAccount.disabled = true;
    openAccount.disabled = false;
}

openAccount.addEventListener('click', () => {
    deposit.disabled = withdraw.disabled = requestLoan.disabled = false;
    openAccount.disabled = true;
    updateUI();
});

deposit.addEventListener('click', () => {
    balance += 150;
    updateUI();
});

withdraw.addEventListener('click', () => {
    if (balance >= 50) {
        balance -= 50;
        updateUI();
    } else alert('Insufficient balance.');
});

requestLoan.addEventListener('click', () => {
    if (loan === 0) {
        loan = 5000;
        balance += 5000;
        payLoan.disabled = false;
        updateUI();
    } else alert('Loan already exists.');
});

payLoan.addEventListener('click', () => {
    if (balance >= loan) {
        balance -= loan;
        loan = 0;
        updateUI();
    } else alert('Insufficient balance to pay loan.');
});

closeAccount.addEventListener('click', () => {
    if (balance === 0 && loan === 0) {
        alert('Account closed.');
        disableAllExceptOpen();
    } else alert('Balance and loan must be zero to close the account.');
});