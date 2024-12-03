const typingEffect = document.getElementById('typing-effect');
const text = 'Rajasekhar Koneti';
let index = 0;
let speed = 300; // Speed of the typing effect in milliseconds

function type() {
    if (index < text.length) {
        typingEffect.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed, 230);
    }
}
type();