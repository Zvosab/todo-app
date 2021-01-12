const userInput = document.getElementById("input-todo");
const addBtn = document.getElementById("btn-add");

// returns user input
const getUserInput = () => userInput.value;
const clearUserInput = () => (userInput.value = "");

// adds new element (todo) to html
const newToDo = () => {
  // checks user input
  if (!userInput.value || userInput.value.trim() === "") {
    alert("Please enter something.");
  } else {
    const p = document.createElement("p");
    p.innerHTML = getUserInput();
    document.getElementById("section").appendChild(p);
    p.id = "new-para";
    p.addEventListener("click", () => {
      p.remove();
    });
  }
  clearUserInput(); // clears user input
};

addBtn.addEventListener("click", newToDo);
