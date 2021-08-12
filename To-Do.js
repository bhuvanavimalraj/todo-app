//Elements
let clear = document.querySelector(".clear");
let dateElement = document.getElementById("date");
let list = document.getElementById("list");
let input = document.getElementById("input");
let addBtnIcon = document.getElementById("add-btn-icon");

//Classes
let CHECK = "bi bi-check-circle-fill";
let UNCHECK = "bi bi-circle";
let LINE_THROUGH = "lineThrough";

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

//add an item
input.addEventListener("keyup", function (event) {
  if (event.key === 13) {
    let todo = input.value;

    //if the input isn't empty
    if (todo) {
      addToDo(todo, id, false, false);

      list.push({
        name: todo,
        id: id,
        done: false,
        trash: false,
      });
      id++;
    }
    input.value = "";
  }
});

addBtnIcon.addEventListener("click", function (event) {
  event.preventDefault();
  addToDo();
});

//Complete todo
function completeToDo(element) {
  element.classlist.toggle(CHECK);
  element.classlist.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classlist.toggle(line_through);

  LIST[element.id].done = list[element.id].done ? false : true;
}

//remove todo
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
}
list.addEventListener("click", function (event) {
  let element = event.target;
  let elementJob = element.attributes.job.value;

  if (elementJob === "complete") {
    completeToDo(element);
  } else elementJob === "delete";
  {
    removeToDo(element);
  }
});
