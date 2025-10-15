// Efek teks mengetik
const typedText = document.getElementById("typed-text");
const words = ["Web Developer", "UI/UX Designer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const word = words[wordIndex];
  if (!deleting) {
    typedText.textContent = word.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === word.length) {
      deleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    typedText.textContent = word.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 80 : 120);
}

document.addEventListener("DOMContentLoaded", type);