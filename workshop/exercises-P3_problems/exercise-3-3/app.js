// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

// after breaking my head on this for 45 minutes i eventually looked at the solution
// yeah... never would have thouught to do that
const container = document.querySelector("#btn-list");
//set initial parameters we call back to this to
//eventually reset the function
function redo() {
  for (i = 1; i <= 4; i++) {
    const ogBtn = document.getElementById(`btn-` + i);
    ogBtn.style.opacity = 1;
    ogBtn.style.backgroundColor = "gold";
    if (i === 4 && ogBtn.classList.length > 0) {
      ogBtn.classList.remove("jitters");
    }
  }
}
redo();

//toggles between elements
function toggleC(id, color) {
  const btns = document.getElementById(id);
  const colorAct = btns.style.backgroundColor;

  btns.style.backgroundColor = colorAct === "gold" ? color : "gold";
}

function onClick(e) {
  const btnId = e.target.id;
  const btnElement = document.getElementById(btnId);
  switch (btnId) {
    case "btn-1":
      btnElement.style.opacity =
        btnElement.style.opacity === "100" ? "0" : "100";
      break;
    case "btn-2":
      toggleC(btnId, "rgb(134,38,51)");
      break;
    case "btn-3":
      toggleC(btnId, "lightblue");
      break;
    case "btn-4":
      btnElement.classList.toggle("jitters");
      break;
    case "reset":
      redo();
      break;
    default:
      break;
  }
}

container.addEventListener("click", onClick);
