
// =====================================
// CAMPUSCONNECT - STUDENT PORTAL
// JavaScript Functionality
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("CampusConnect loaded successfully!");

    // 1. Smooth navigation
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 2. Highlight active navigation
    const sections = document.querySelectorAll("main section");

    window.addEventListener("scroll", function () {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.style.color = "";

            if (link.getAttribute("href") === "#" + currentSection) {
                link.style.color = "#38bdf8";
            }
        });
    });

    // 3. Display current date
    const dateElement = document.createElement("p");

    dateElement.textContent =
        "Today's Date: " +
        new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    dateElement.style.textAlign = "center";
    dateElement.style.margin = "10px";

    const header = document.querySelector("header");

    if (header) {
        header.appendChild(dateElement);
    }

    // 4. Search dashboard content
    const searchBox = document.createElement("input");

    searchBox.type = "text";
    searchBox.placeholder = "Search your portal...";
    searchBox.style.display = "block";
    searchBox.style.width = "90%";
    searchBox.style.maxWidth = "500px";
    searchBox.style.padding = "12px";
    searchBox.style.margin = "20px auto";
    searchBox.style.borderRadius = "8px";
    searchBox.style.border = "1px solid #ccc";

    const main = document.querySelector("main");

    if (main) {
        main.insertBefore(searchBox, main.firstChild);
    }

    searchBox.addEventListener("input", function () {
        const searchText = searchBox.value.toLowerCase();

        document.querySelectorAll("main section").forEach(function (section) {
            const content = section.textContent.toLowerCase();

            section.style.display =
                content.includes(searchText) ? "" : "none";
        });
    });

    // 5. Card hover effects
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        card.style.transition = "0.3s ease";

        card.addEventListener("mouseenter", function () {
            card.style.transform = "translateY(-4px)";
            card.style.boxShadow = "0 8px 18px rgba(0,0,0,0.15)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "";
        });
    });

    // 6. Back to top button
    const topButton = document.createElement("button");

    topButton.textContent = "↑ Back to Top";
    topButton.style.position = "fixed";
    topButton.style.bottom = "20px";
    topButton.style.right = "20px";
    topButton.style.padding = "12px";
    topButton.style.background = "#123c69";
    topButton.style.color = "white";
    topButton.style.border = "none";
    topButton.style.borderRadius = "8px";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", function () {
        topButton.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 7. Footer year
    const footer = document.querySelector("footer");

    if (footer) {
        const year = new Date().getFullYear();
        footer.textContent += " | " + year;
    }

});
