const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const dropdownLinks = document.querySelectorAll(".has-dropdown > a");

// Burger-menu: kun mobil (under 800px)
if (burger && menu) {
  burger.addEventListener("click", () => {
    if (window.innerWidth < 800) {
      menu.classList.toggle("active");
    }
  });
}

// Dropdown: virker på mobil og desktop
dropdownLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") === "#") e.preventDefault();
    const parent = link.parentElement;
    const isOpen = parent.classList.contains("open");
    // Luk alle andre dropdowns
    document.querySelectorAll(".has-dropdown.open").forEach((other) => {
      if (other !== parent) other.classList.remove("open");
    });
    // Åbn hvis lukket, ellers luk
    if (!isOpen) {
      parent.classList.add("open");
    } else {
      parent.classList.remove("open");
    }
  });
});
