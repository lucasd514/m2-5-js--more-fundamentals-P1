// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement
const container = document.querySelector("#btn-list");
container.backgroundColor = "yellow";

function onClick(event) {
  const btnID = event.target.id;
  console.log(btnID);
  switch (btnID) {
    case "btn-1":
      event.target.style.opacity = "0";
      break;
    case "btn-2":
      event.target.style.backgroundColor = "rgb(240,188,66)";
      break;
    case "btn-3":
      event.target.style.backgroundColor = "rgb(134,38,51)";
      break;
    case "btn-4":
      event.target.classList.add("jitters");
      break;
    default:
      return "wrong click homey";
      break;
  }
}

container.addEventListener("mousedown", onClick);
