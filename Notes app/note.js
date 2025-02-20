const notesContainer = document.querySelector(".noteContainer");
const createbtn = document.querySelector(".create");
let notes = document.querySelectorAll(".input-box");

function showData() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showData();

function updateData() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createbtn.addEventListener("click", () => {
  let input = document.createElement("p");
  let img = document.createElement("img");
  input.className = "input-box";
  input.setAttribute("contenteditable", "true");
  img.src = "delete.png";
  notesContainer.appendChild(input).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateData();
  } else if (e.target.tagName === "p") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onKeyup = function () {
        updateData();
      };
    });
  }
});
