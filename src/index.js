import "./styles.css";

let parent = document.getElementById("wrapper");
let selectedDiv;

function highlight(div) {
  if (selectedDiv) {
    // remove the existing highlight if any
    selectedDiv.style.backgroundColor = "blue";
  }
  selectedDiv = div;
  selectedDiv.style.backgroundColor = "yellow";
}

parent.addEventListener("click", (event) => {
  // where was the click?
  let div = event.target.closest("div");

  if (event.target.tagName !== "DIV") return;
  // not on DIV? Then we're not interested
  else if (event.target.id === "wrapper") return;
  else highlight(div); // highlight it
});
