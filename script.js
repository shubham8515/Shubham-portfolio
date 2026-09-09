function showMessage() {
    alert("Thanks for visiting my portfolio!");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


// Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {

    sections.forEach(function(section) {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }

    });

});


// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let message = document.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {

        alert("Please fill all the fields.");

    } else {

        alert("Thank you, " + name + "! Your message has been submitted.");

    }

});