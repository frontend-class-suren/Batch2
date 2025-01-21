let balance = 0, loan = 0;
const balanceDisplay = document.getElementById('balance');
const loanDisplay = document.getElementById('loan');

const buttons = {
    openAccount: document.getElementById('openAccount'),
    deposit: document.getElementById('deposit'),
    withdraw: document.getElementById('withdraw'),
    requestLoan: document.getElementById('requestLoan'),
    payLoan: document.getElementById('payLoan'),
    closeAccount: document.getElementById('closeAccount')
};

function updateUI() {
    balanceDisplay.textContent = balance;
    loanDisplay.textContent = loan;
    buttons.closeAccount.disabled = balance !== 0 || loan !== 0;
}

function disableAllExceptOpen() {
    buttons.deposit.disabled = buttons.withdraw.disabled = buttons.requestLoan.disabled = buttons.payLoan.disabled = buttons.closeAccount.disabled = true;
    buttons.openAccount.disabled = false;
}

buttons.openAccount.addEventListener('click', () => {
    buttons.deposit.disabled = buttons.withdraw.disabled = buttons.requestLoan.disabled = false;
    buttons.openAccount.disabled = true;
    updateUI();
});

buttons.deposit.addEventListener('click', () => {
    balance += 150;
    updateUI();
});


