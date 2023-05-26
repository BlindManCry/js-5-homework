var input = document.getElementById("text");
var list = document.getElementById("list");
function addElement() {
  if (input.value) {
    var li = document.createElement("li");
    list.appendChild(li);
    li.innerText = input.value;
    input.value = "";
  } else {
    alert("ინფუთი არ უნდა იყოს ცარიელი");
  }
}

function deleteElement() {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}
