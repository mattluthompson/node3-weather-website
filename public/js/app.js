console.log('This is a test message!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    
    messageOne.textContent = 'Loading your weather...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = 'Showing results for ' + data.location + ':'
            messageTwo.textContent = data.forecast
        }
    })
})
})