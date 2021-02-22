// bad (old) way - not working in 2021

//let path = "file:///C:/Users/Viktor.Jakovlev/Documents/SEDC V9/AJS/skwd9-04-ajs/G1/class08 - Async/read_text_file/text.txt"

// fetch(path)
//     .then(response => response.text())
//     .then(text => console.log(text))

// new (good) way!
// don't use arrow functions here!

document.getElementById("inputFile").addEventListener("change", function() {
    var fr = new FileReader();

    fr.onload = function() {
        workWithInputResult(fr.result)
    }

    //console.log(this.files)

    fr.readAsText(this.files[0])

})

function workWithInputResult(input) {
    //remove extra white spaces
    let prcessedInput = input.replace(/\s+/g, " ").trim()
    
    //convert in to array
    let prcessedInputArray = prcessedInput.split(" ")
    //console.log(prcessedInputArray)

    //convert back to string
    let prcessedInputArrayToString = prcessedInputArray.join(" ")
    console.log(prcessedInputArrayToString)
}