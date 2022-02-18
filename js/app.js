const textDisplay = document.getElementById('typewritter')
const phrases = ['I am a software developerr']
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

// const fname = document.getElementById('first-name')
// const lname = document.getElementById('last-name')
// let email = document.getElementById('email').value;
// const subject = document.getElementById('subject')
// const message = document.getElementById('message')
// const form = document.getElementById('contact-form')
// const errorElement = document.getElementsByClassName('error')
const isValidEmail = (email) => {
    const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return re.test(String(email).toLowerCase());
} 


const form = document.querySelector('form');
const thankYou = document.querySelector('.thank-you');
const nameInput = document.querySelector(
    'input[name="first-name"]'
);
const emailInput = document.querySelector(
    'input[name="email"]'
);

let isFormValid = false;

const resetElm = (elm) => {
    elm.classList.remove('invalid');
    elm.nextElementSibling.classList.add("hidden");
}

const invalidateElm = (elm) => {
    nameInput.classList.add("invalid");
    nameInput.nextElementSibling.classList.remove("hidden");
}

const validateInputs = () => {
    isFormValid = true;
    resetElm(nameInput);
    resetElm(emailInput);

    if (!nameInput.value) {
        isFormValid = false;
        invalidateElm(nameInput);
    }

    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        console.log("hello");
        invalidateElm(emailInput);
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
    if (isFormValid) {
        form.remove();
        thankYou.classList.remove("hidden");
    }
});

nameInput.addEventListener('input', () => {
    validateInputs();
});









//     if (pattern.test(email) == false) {
//         //stop from working
//         return false;
//     }else{

//         form.addEventListener('submit', (e) => {
//             let messages = []
//             if (message.value === '' || message.value == null) {
//                 messages.push('Message is required')
//             }

//             if (messages.length > 0) {
//             e.preventDefault()
//             errorElement[4].innerText = messages.join(', ')
//             }
//         })
//         form.addEventListener('submit', (e) => {
//             let messages = []
//             if (subject.value === '' || subject.value == null) {
//                 messages.push('Subject is required')
//             }

//             if (messages.length > 0) {
//             e.preventDefault()
//             errorElement[3].innerText = messages.join(', ')
//             }
//         })
//         form.addEventListener('submit', (e) => {
            
//         })
//         form.addEventListener('submit', (e) => {
//             let messages = []
//             if (lname.value === '' || lname.value == null) {
//                 messages.push('Last Name is required')
//             }

//             if (messages.length > 0) {
//             e.preventDefault()
//             errorElement[1].innerText = messages.join(', ')
//             }
//         })
//         form.addEventListener('submit', (e) => {
//             let messages = []
//             if (fname.value === '' || fname.value == null) {
//                 messages.push('First Name is required')
//             }

//             if (messages.length > 0) {
//             e.preventDefault()
//             errorElement[0].innerText = messages.join(', ')
//             }
//         })
//     }

// // Regex check
// function validation()
// {

//     var email = document.getElementById("email").value;
    

//     if (email.match(pattern))
//     {
//         form.classList.add("valid")
//         form.classList.remove("invalid")
//         text.innerHTML = "Your Email Address in Valid.";
//         text.style.color = "#00ff00";
//     }
//     else
//     {
//         form.classList.remove("valid")
//         form.classList.add("invalid")
//         text.innerHTML = "Please Enter Valid Email Address.";
//         text.style.color = "#ff0000";
//     }
// }

