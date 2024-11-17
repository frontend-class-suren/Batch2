function submitContact() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const occupation =document.getElementById('occupation').value;
  // const address = document.getElementById('address').value;


  document.getElementById('detailFirstName').textContent = firstName;
  document.getElementById('detailLastName').textContent = lastName;
  document.getElementById('detailEmail').textContent = email;
  document.getElementById('detailPhone').textContent = phone;
  document.getElementById('detailOccupation').textContent = occupation;
  // document.getElementById('detailAddress').textContent = address;

  document.getElementById('contactDetails').style.display = 'block';

  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('occupation').value = '';
  // document.getElementById('address').value = '';
}