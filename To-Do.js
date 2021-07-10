//Elements
let clear = document.querySelector(".clear");
let dateElement = document.getElementById("date");
let list = document.getElementById("list");
let input = document.getElementById("input");
let addBtnIcon = document.getElementById("add-btn-icon");

//Classes
let check = "bi bi-check-circle-fill";
let uncheck = "bi bi-circle";
let line_through = "lineThrough";

//date
let options = { weekday: "long", month: "short", day: "numeric" };
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addToDo() {
  let todo = input.value;
  if (!todo) {
    return;
  }
  // if (trash) {
  //   return;
  // }
  // let done = done ? check : uncheck;
  // let line = done ? line_through : "";

  let item = `
    <li>
      <div class="row">
        <div class="col">
          <i class ="fa fa-circle-thin co" job ="complete" id ="0"></i>
          <span class="ps-2">${todo}</span>
        </div>
      
        <div class="col text-end">
          <i class ="fa fa-trash-o de" job="delete" id ="0"></i>
        </div>
      </div>
    </li>`;
  let position = "beforeend";

  list.insertAdjacentHTML(position, item);
}
// addToDo("Tomato");
// addToDo("Onion");
// addToDo("Green Chilli");
// addToDo("Drink Coffee");

//add an item
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addToDo();
    // list.push({
    //         name: todo,
    //         id: id,
    //         done: false,
    //         trash: false,
    //       });

    //     input.value = "";
    //     id++;
  }
});

addBtnIcon.addEventListener("click", function (event) {
  event.preventDefault();
  addToDo();
});
