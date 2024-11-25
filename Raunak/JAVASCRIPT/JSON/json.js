fetch('employees.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById("demo").innerHTML =
      data.employees[1].firstName + " " + data.employees[1].lastName;
  })
  .catch(error => console.error('Error fetching the JSON:', error));
