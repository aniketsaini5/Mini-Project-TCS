const form = document.querySelector("form");
const feedback = document.querySelector("#feedback");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    const validName = /^([A-Z][a-z]+)(\s[A-Z][a-z]+)*$/.test(name);
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const error = !validName ? "Name must be in format: Capitalized words (e.g., 'Aniket Sadhiyan')."
        : !validEmail ? "Please enter a valid email!"
            : null;

    feedback.textContent = error ? error : "Thank you! Message sent.";
    feedback.style.color = error ? "red" : "black";
    setTimeout(() => (feedback.textContent = ""), 3000);

    if (!error) {
        const formData = { name: name, email: email, message: message, submittedAt: new Date().toISOString() };
        console.log(formData);
        form.reset();

    }
});