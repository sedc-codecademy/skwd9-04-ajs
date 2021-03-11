document.querySelector('#get').addEventListener('click', () => {
    fetch('http://localhost:3000')
        .then(res => res.json())
        .then(res => console.log(res))
})

document.querySelector('#post').addEventListener('click', () => {
    fetch('http://localhost:3000', {
        method: 'POST'
    })
        .then(res => res.json())
        .then(res => console.log(res))
})

document.querySelector('#put').addEventListener('click', () => {
    fetch('http://localhost:3000/user', {
        method: 'PUT'
    })
        .then(res => res.json())
        .then(res => console.log(res))
})

document.querySelector('#delete').addEventListener('click', () => {
    fetch('http://localhost:3000/user/delete', {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(res => console.log(res))
})