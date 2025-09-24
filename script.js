// Greeting by time
const greet = document.getElementById("greet");
const hour = new Date().getHours();

if (hour < 12) {
  greet.textContent = "Good Morning!";
} else if (hour < 18) {
  greet.textContent = "Good Afternoon!";
} else {
  greet.textContent = "Good Evening!";
}

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
