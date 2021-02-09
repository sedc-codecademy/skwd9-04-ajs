$(document).ready(function(){
    let getStudentsBtn = $("#getStudentsBtn");
    let result = $("#result");
    getStudentsBtn.click(function(){
        $.ajax({
            url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
            success: function(response){
                console.log("Success!");
                let responseObject = JSON.parse(response);
                let resultTitle = result.find("h1").first();
                let resultList = result.find("ul").first();
                resultTitle.text(`${responseObject.academy} Academy:`);
                resultList.html("");
                for (let student of responseObject.students) {
                    resultList.append(`<li>${student}</li>`)
                }
            },
            error: function(error){
                console.log(error);
            }
        })
    })
})