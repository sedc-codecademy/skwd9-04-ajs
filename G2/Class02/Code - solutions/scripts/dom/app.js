let colorInput = document.getElementById("color");
let fontSizeInput = document.getElementById("fontSize");
let textInput = document.getElementById("text");
let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(){
    //clear the HTML in the result element
    document.getElementById("result").innerHTML = '';
    if(!colorInput.value){
        console.log("You must enter color");
        return;
    }
    if(!fontSizeInput.value){
        console.log("You must enter font size");
        return;
    }
    if(!parseFloat(fontSizeInput.value)){
        console.log("You must enter a number for font size");
        return;
    }
    if(!textInput.value){
        console.log("You must enter text");
        return;
    }
    let header = document.createElement("h1");
    header.innerText = textInput.value;
    header.style.fontSize = fontSizeInput+"em";
    header.style.color = colorInput.value;

    document.getElementById("result").appendChild(header);
    //reset the values of the inputs
    colorInput.value="";
    fontSizeInput.value="";
    textInput.value="";
});