// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleTheme() {
  const body = document.body;
  const nav = document.querySelector("nav");
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");

  // Toggle the light and dark classes
  body.classList.toggle("dark");
  body.classList.toggle("light");
  nav.classList.toggle("dark");
  nav.classList.toggle("light");

  // Change the toggle button icon based on the theme
  if (body.classList.contains("dark")) {
    themeToggle.innerHTML =
      '<img src="./assets/sun-icon.svg" alt="Sun Icon" id="sun-icon" class="theme-icon" />';
    themeToggleMobile.innerHTML =
      '<img src="./assets/sun-icon.svg" alt="Sun Icon" id="sun-icon-mobile" class="theme-icon" />';
  } else {
    themeToggle.innerHTML =
      '<img src="./assets/moon-icon.svg" alt="Moon Icon" id="moon-icon" class="theme-icon" />';
    themeToggleMobile.innerHTML =
      '<img src="./assets/moon-icon.svg" alt="Moon Icon" id="moon-icon-mobile" class="theme-icon" />';
  }
}
