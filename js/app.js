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

// Sidebar menu

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
function validation()
{

    var email = document.getElementById("email").value;
    var pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    if (email.match(pattern))
    {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Your Email Address in Valid.";
        text.style.color = "#00ff00";
    }
    else
    {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Please Enter Valid Email Address.";
        text.style.color = "#ff0000";
    }
}
// function validate(){
//     var mail = document.getElementById("email").value;

    // var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

//     if(regx.email(mail)){
//         document.span.innerHTML = "Correct Email";
//         return true;
//     }
//     else{
//         document.span.innerHTML = "Incorrect Email";
//         return false;
//     }

// }

