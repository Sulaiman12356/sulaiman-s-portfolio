
// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
});

// Mobile Nav Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ScrollReveal Animation
ScrollReveal().reveal("section", {
  delay: 200,
  distance: "50px",
  duration: 800,
  easing: "ease-in-out",
  origin: "bottom",
  reset: false
});

// WhatsApp Integration on Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const waMessage = `Hello Sulaiman, my name is ${name}. My email is ${email}. Here's my message: ${message}`;
  const waURL = "https://wa.me/2348051780169?text=" + encodeURIComponent(waMessage);

  // Submit to Formspree (optional backend)
  this.submit();

  // Redirect to WhatsApp
  window.open(waURL, "_blank");
});
