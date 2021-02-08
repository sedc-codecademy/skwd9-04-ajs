 function printName(resultElement, name){
    let resultTitle = $("h1").first();
     resultTitle.text(name);
 }
 function printStats(resultElement, response){
     let resultTable = $("tbody").first();
     resultTable.html("");
     resultTable.html( `
     <tr> 
         <td> Height </td>
         <td> ${response.height}cm </td>
     </tr>
     <tr> 
         <td> Weight </td>
         <td> ${response.mass}kg </td>
     </tr>
     <tr> 
         <td> Eye Color </td>
         <td> ${response.eye_color} </td>
     </tr>
     <tr> 
         <td> Hair Color </td>
         <td> ${response.hair_color} </td>
     </tr>`);
 }
 $(document).ready(function(){
    
     $("#getLukeBtn").click(function(){
         $.ajax({
             url:"https://swapi.dev/api/people/1/",
             success: function(response){
                 console.log("Success!");
                 printName( $("#result"), response.name);
                 printStats( $("#result"), response);
             },
             error: function(error){
                 console.log(error);
             }
         })
     })
 })