let button = document.getElementById("getData")
let table = document.getElementById("table")

button.addEventListener("click", () => {
    axios.get("http://localhost:3000")
        .then(response => {
            console.log(response.data)
            render(table, response.data)
        })
  
})

function render(element, data) {
    element.innerHTML = "";

    data.forEach(item => {
        element.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
            </tr>
        `
    })
}
