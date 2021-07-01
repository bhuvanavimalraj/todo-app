let clear = document.querySelector(".clear");
let dateElement = document.getElementById("date");

let list = document.getElementById("list");
function addToDo(toDo) {
  let text = `
    <li class="item">
      <div class="row">
      <div class="col-1"><i class="bi bi-circle" job="complete"></i></div>
      <div class="col"><span class="text">${toDo}</span></div>
      <div class="col-1"><i class="bi bi-basket" job="delete"></i></div>
      </div>
    </li>`;
  let position = "beforeend";

  list.insertAdjacentHTML(position, text);
}
addToDo("Tomato");
addToDo("Onion");
addToDo("Green Chilli");

let input = document.getElementById("input");

document.addEventListener("keyup", function (event) {
  if (event.keycode == 13) {
    let todo = input.Value;
    if (todo) {
      addToDo(todo);
    }
    input.value = "";
  }
});
