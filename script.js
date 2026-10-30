
// CampusConnect Student Portal

document.addEventListener("DOMContentLoaded", function () {
  console.log("CampusConnect loaded successfully!");

  const sections = document.querySelectorAll("main section");

  sections.forEach(function (section) {
    section.style.transition = "0.3s ease";
  });

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      console.log("Navigation:", link.textContent);
    });
  });
});
