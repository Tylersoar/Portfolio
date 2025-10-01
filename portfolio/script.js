// Change text button
document.getElementById("ChangeTextButton").addEventListener("click", function () {
    document.querySelector("p").textContent = "You clicked the button!";
});

// Dark mode toggle
const toggleButton = document.getElementById("darkModeToggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️";
    } else {
        toggleButton.textContent = "🌙";
    }
});

// Contact form validation
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector("input[type='text']").value.trim();
    const email = this.querySelector("input[type='email']").value.trim();
    const message = this.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    alert("✅ Message sent successfully!");
    this.reset();
});

// Project cards scroll animation
const projectCards = document.querySelectorAll(".project-card");

function revealOnScroll() {
    projectCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 100) {
            card.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// toggle more info

const toggleButtons = document.querySelectorAll(".toggle-info");

toggleButtons.forEach(button => {
    button.addEventListener("click", function () {
        const card = this.closest(".project-card");
        card.classList.toggle("expanded");

        if (card.classList.contains("expanded")) {
            this.textContent = "view Less ▲";
        } else {
            this.textContent = "view More ▼";
        }
    });
});