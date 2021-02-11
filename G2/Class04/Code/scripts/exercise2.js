let changeColor = (element, color = "black") => element.style.color = color;

let changeTextSize = (element, textSize) => {
  if(!textSize){
    element.style.fontSize = "24px";
  } else {
    element.style.fontSize = textSize + "px";
  }
}

document.getElementById("changeColorBtn").addEventListener("click", () => {
    let inputTextSize = document.getElementById("textSizeInput").value;
    let inputColor = document.getElementById("colorInput").value;
    let header = document.getElementsByTagName("h1")[0];
    changeTextSize(header, inputTextSize);
    changeColor(header, inputColor);
});