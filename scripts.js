let selectedRow = null;

document.getElementById("btn").innerHTML = "Submit"

function onFormSubmit(){
  let formData = readFormData();
  if(selectedRow === null)
  insertNewRecord(formData)
  else
  updateRecord(formData)
  resetForm();
}
function readFormData(){
  let formData = {};
  formData["todoItem"] = document.getElementById("todoItem").value
  console.log(formData)
  return formData
}
function insertNewRecord(data){
  document.getElementById("btn").innerHTML = "Submit"
  let table = document.getElementById("todoList").getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length)
  cell1 = newRow.insertCell(0)
  cell1.innerHTML = data.todoItem
  cell2 = newRow.insertCell(1)
  cell2.innerHTML = `<div class="btnBox"><button onClick="onEdit(this)">Edit  </button>
  <button onClick="onDelete(this)">Delete</button></div>`
}
function resetForm (){
  document.getElementById("todoItem").value = "";
  selectedRow = null;
}
function onEdit (td){
  document.getElementById("btn").innerHTML = "Save"
  selectedRow = td.parentElement.parentElement.parentElement
  console.log(selectedRow)
  document.getElementById("todoItem").value = selectedRow.cells[0].innerHTML;
}
function updateRecord(formData){
  document.getElementById("btn").innerHTML = "Submit"
  selectedRow.cells[0].innerHTML = formData.todoItem
}
function onDelete(td) {
  if (confirm("Are you sure you want to delete this record?")) {
    row = td.parentElement.parentElement.parentElement;
    document.getElementById("todoList").deleteRow(row.rowIndex);
    resetForm();
  }
}



