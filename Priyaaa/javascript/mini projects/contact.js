function submit(){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const address =document.getElementById("address").value;
    const message = document.getElementById("message").value;

    document.getElementById("first").textContent = firstName;
    document.getElementById("last").textContent = lastName;
    document.getElementById("mail").textContent = email;
    document.getElementById("add").textContent = address;
    document.getElementById("mess").textContent = message;

    document.getElementById("details").style.display = "block";

    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("email").value = '';
    document.getElementById("address").value = '';
    document.getElementById("message").value = '';

}