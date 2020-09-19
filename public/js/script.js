
const textMessageOne = document.querySelector('.textMessageOne')
const textMessageTwo = document.querySelector('.textMessageTwo')
const search = document.querySelector('input')

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    const country = search.value
    textMessageOne.textContent = ""

    fetch('/covid?country='+country).then((response)=>{
        response.json().then((data)=>{
            console.log(data.data);
            textMessageOne.textContent = data.data
        })
    })
})

