// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const container = document.querySelector("#btn-list");

for (i = 1; i <= 4; i++) {
  const preButton = document.getElementById("btn-" + i);
  preButton.className.opacity = 1;
  preButton.style.backgroundColor = "gold";
}

// this was lifted from the solution because i had no idea
const toggleColor = (id, color) => {
  const btnElement = document.getElementById(id);
  const currentColor = btnElement.style.backgroundColor;

  btnElement.style.backgroundColor = currentColor === "gold" ? color : "gold";
};

function onClick(e) {
  const buttonID = event.target.id;
  const btnSwap = document.getElementById(buttonID);
  switch (buttonID) {
    case "btn-1":
      btnSwap.style.opacity = btnSwap.style.opacity === "100" ? "0" : "100";
      break;
    case "btn-2":
      toggleColor(buttonID, "crimson");
      break;
    case "btn-3":
      toggleColor(buttonID, "lightblue");
      break;
    case "btn-4":
      btnSwap.classList.toggle("jitters");
      break;
    default:
      break;
  }
}

container.addEventListener("click", onClick);
