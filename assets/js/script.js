const phrases = [
    "Data Scientist",
    "Complexity Translator",
    "Resolution Architect"
];

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let delay = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];
    typedText.textContent = currentPhrase.substring(0, letterIndex);

    if (isDeleting) {
        letterIndex--;
        delay = 50;
    } else {
        letterIndex++;
        delay = 100;
    }

    if (!isDeleting && letterIndex === currentPhrase.length) {
        delay = 1500;
        isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 500;
    }

    setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
});
