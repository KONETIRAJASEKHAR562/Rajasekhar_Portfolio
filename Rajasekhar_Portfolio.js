const typingEffect = document.getElementById('typing-effect');
const text = 'Rajasekhar Koneti';
let index = 0;
let speed = 300; // Speed of the typing effect in milliseconds

function type() {
    // If the entire text has been displayed, reset the index
    if (index === text.length) {
        index = 0; // Reset index to start typing again
        typingEffect.textContent = ''; // Clear the text for a fresh start
    }

    // Type the next character
    typingEffect.textContent += text.charAt(index);
    index++;

    // Call the type function again after the specified speed
    setTimeout(type, speed);
}

// Start the typing effect
type();
