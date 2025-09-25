// function to add a student to the table
function addStudent() {
  // get input values
  const name = document.getElementById("studentName").value;
  const age = document.getElementById("studentAge").value;
  const course = document.getElementById("studentCourse").value;

  // validate inputs
  if (name === "" || age === "" || course === "") {
      alert("please fill out all fields before adding a student.");
      return;
  }

  // get reference to the table body
  const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];

  // insert a new row
  const newRow = table.insertRow();

  // insert cells into the new row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  // add values to cells
  cell1.innerHTML = name;
  cell2.innerHTML = age;
  cell3.innerHTML = course;

  // clear input fields
  document.getElementById("studentName").value = "";
  document.getElementById("studentAge").value = "";
  document.getElementById("studentCourse").value = "";
}

// function to add a subject to the table
function addSubject() {
  // get input values
  const code = document.getElementById("subjectCode").value;
  const subject = document.getElementById("subjectName").value;
  const units = document.getElementById("subjectUnits").value;

  // validate inputs
  if (code === "" || subject === "" || units === "") {
      alert("please fill out all fields before adding a subject.");
      return;
  }

  // get reference to the table body
  const table = document.getElementById("subjectTable").getElementsByTagName('tbody')[0];

  // insert a new row
  const newRow = table.insertRow();

  // insert cells into the new row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  // add values to cells
  cell1.innerHTML = code;
  cell2.innerHTML = subject;
  cell3.innerHTML = units;

  // clear input fields
  document.getElementById("subjectCode").value = "";
  document.getElementById("subjectName").value = "";
  document.getElementById("subjectUnits").value = "";
}
