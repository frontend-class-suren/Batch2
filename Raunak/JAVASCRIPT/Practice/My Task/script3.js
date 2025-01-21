function submitContact() {
    // Get the input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const profession =document.getElementById('profession').value;
    const address = document.getElementById('address').value;

    // Display the values in the contact details section
    document.getElementById('detailFirstName').textContent = firstName;
    document.getElementById('detailLastName').textContent = lastName;
    document.getElementById('detailEmail').textContent = email;
    document.getElementById('detailPhone').textContent = phone;
    document.getElementById('detailProfession').textContent = profession;
    document.getElementById('detailAddress').textContent = address;

    // Show the contact details section
    document.getElementById('contactDetails').style.display = 'block';

    // Clear form inputs
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('address').value = '';
  }