const get = document.getElementById("taskinp");
const btn = document.getElementById("addTask");
const ul = document.getElementById("tasklist");

btn.addEventListener("click", () => {
  if (get.value.trim() != "") {
    const li = document.createElement("li");
    li.textContent = get.value;

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      li.remove();
    });

    // li.addEventListener("click", () => {
    //   li.classList.toggle("completed");
    // });

    li.addEventListener("click", () => {
      if (!li.classList.contains("completed")) {
        li.classList.add("completed");
      }
    });

    ul.appendChild(li);
    li.appendChild(del);

    get.value = ""; //clear the input box
  }
});
