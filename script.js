function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// -----------TRANSITION UPON HOVERING OVER THE BUTTONS------
document
  .getElementById("web-dev-btn")
  .addEventListener("mouseenter", function () {
    document.getElementById("web-dev-projects").style.display = "block";
    document.getElementById("seo-projects").style.display = "none";
  });

document
  .getElementById("web-dev-btn")
  .addEventListener("mouseleave", function () {
    // Keep Web Development projects visible when the mouse leaves
    if (!document.getElementById("seo-btn").matches(":hover")) {
      document.getElementById("web-dev-projects").style.display = "block";
      document.getElementById("seo-projects").style.display = "none";
    }
  });

document.getElementById("seo-btn").addEventListener("mouseenter", function () {
  document.getElementById("seo-projects").style.display = "block";
  document.getElementById("web-dev-projects").style.display = "none";
});

document.getElementById("seo-btn").addEventListener("mouseleave", function () {
  // Keep SEO projects visible when the mouse leaves
  if (!document.getElementById("web-dev-btn").matches(":hover")) {
    document.getElementById("seo-projects").style.display = "block";
    document.getElementById("web-dev-projects").style.display = "none";
  }
});
