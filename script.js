document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".main-header__logo");
  const navLinks = document.querySelectorAll(".main-header__nav-link");
  const sections = document.querySelectorAll("section");

  // 1. Click logo → scroll to top
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 2. Highlight nav link when section is in view
  function setActiveLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80; // adjust for header height
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
});
