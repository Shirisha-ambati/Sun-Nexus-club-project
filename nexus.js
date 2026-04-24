// ===== Mobile Navbar Toggle =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Check if elements exist before adding events
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ===== Smooth Scroll for Internal Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetID = this.getAttribute("href").slice(1);
    if (!targetID) return;

    const targetEl = document.getElementById(targetID);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Close nav on mobile after click
    if (navLinks && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});
