        // Typing Effect for "Rajasekhar Koneti"
        const text = "Rajasekhar Koneti";
        let index = 0;

        function typeEffect() {
            document.querySelector("#typing-effect").textContent = text.substring(0, index++);
            
            if (index > text.length) {
                setTimeout(() => {
                    index = 0;
                    typeEffect();
                }, 1500);
            } else {
                setTimeout(typeEffect, 200);
            }
        }

        document.addEventListener("DOMContentLoaded", typeEffect);