const textDisplay = document.getElementById('typewritter')
const phrases = ['I am a software developer', 'I love to code', 'I love to teach code.']
let i = 0
let j = 0
let curentPhrase = []
function loop () {
    
    if (i < phrases.length) {
        textDisplay.innerHTML = curentPhrase.join('')
        if (j <= phrases[i].length) {
            curentPhrase.push(phrases[i][j])
            j++
        }

        if (j == phrases[i].length) {
            i++
        }
    }
    setTimeout(loop, 500)
}

loop()

function show() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Form validation

const fname = document.getElementById('first-name')
const lname = document.getElementById('last-name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')
const form = document.getElementById('contact-form')
const errorElement = document.getElementById('error')




form.addEventListener('submit', (e) => {
    let messages = []
    if (message.value === '' || message.value == null) {
        messages.push('Message is required')
    }

    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
})
form.addEventListener('submit', (e) => {
    let messages = []
    if (subject.value === '' || subject.value == null) {
        messages.push('Subject is required')
    }

    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
})
form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '' || email.value == null) {
        messages.push('Email is required')
    }

    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
})
form.addEventListener('submit', (e) => {
    let messages = []
    if (lname.value === '' || lname.value == null) {
        messages.push('Last Name is required')
    }

    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
})
form.addEventListener('submit', (e) => {
    let messages = []
    if (fname.value === '' || fname.value == null) {
        messages.push('First Name is required')
    }

    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
})

// Regex check

// let email = document.getElementById('email');
// let span = getElementByTagName('span');

// email.onekeydown = function(){
//     const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)([a-zA-Z]){2,8}$/;
//     const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
//     if (regex.test(email.value) || regexo.test(email.value)) 
//     {
//         span[0].innerText = "Your email is valid";
//         span[0].style.color = 'lime';
//     }
//     else {
//         span[0].innerText = "Your email is Invalid";
//         span[0].style.color = 'red';
//     }
// }
