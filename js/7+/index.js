let alertmsg = document.getElementById("alert");
let form = document.getElementById("form");
let todo = document.getElementById("todo");
let display = document.getElementById("display");
let add = document.getElementById("add");

add.addEventListener("click", (e) => {
  e.preventDefault();
  todo.style.boxShadow = "0 0 2px orange";

  if (todo.value === "") {
    alertmsg.innerHTML = `No task was entered`;
    todo.style.boxShadow = "0 0 2px red";

    setTimeout(() => {
      alertmsg.innerHTML = ``;
    }, 3000);
  } else {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    display.appendChild(li);
    li.appendChild(div1);
    li.appendChild(div2);
    div1.innerText = todo.value;
    div2.appendChild(editBtn);
    div2.appendChild(deleteBtn);

    div2.style.display = "flex";
    div2.style.gap = "2px";
    editBtn.style.backgroundColor = "darkgreen";
    editBtn.innerText = "Edit";
    deleteBtn.style.backgroundColor = "darkred";
    deleteBtn.innerText = "Delete";

    editBtn.addEventListener("click", (e) => {
      e.preventDefault();
      div1.setAttribute("contentEditable", "true");
    });

    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      li.remove();
    });
  }
});
