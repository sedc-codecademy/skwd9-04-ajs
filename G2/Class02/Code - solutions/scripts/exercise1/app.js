let students = ["Marko", "Petar", "Sonja", "Elena", "Ana"];
let showStudentsBtn = document.getElementById("showStudentsBtn");

showStudentsBtn.addEventListener("click", function(e){
    let unorderedList = document.createElement("ul");
    for(let student of students){
        let listItem = document.createElement("li");
        listItem.innerText = student;
        unorderedList.appendChild(listItem);
    }
    //e.target is the button, parentNode is body element
    e.target.parentNode.appendChild(unorderedList);
})