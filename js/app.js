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
const lastNameInput = document.querySelector(
    'input[name="last-name"]'
);
const subjectInput = document.querySelector(
    'input[name="subject"]'
);
const messageInput = document.querySelector(
    'textarea[name="message"]'
);


const inputs = [
    nameInput,
    emailInput,
    lastNameInput,
    subjectInput,
    messageInput
]

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
    elm.classList.remove('invalid');
    elm.nextElementSibling.classList.add("hidden");
}

const invalidateElm = (elm) => {
    elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove("hidden");
}

const validateInputs = () => {
    if (!isValidationOn) return;

    isFormValid = true;
    inputs.forEach(resetElm);

    if (!nameInput.value) {
        isFormValid = false;
        invalidateElm(nameInput);
    }
    if (!lastNameInput.value) {
        isFormValid = false;
        invalidateElm(lastNameInput);
    }
    if (!subjectInput.value) {
        isFormValid = false;
        invalidateElm(subjectInput);
    }
    if (!messageInput.value) {
        isFormValid = false;
        invalidateElm(messageInput);
    }
    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invalidateElm(emailInput);
    }
    
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if (isFormValid) {
        form.remove();
        thankYou.classList.remove("hidden");
    }
});

inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateInputs();
    });
});

