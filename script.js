// begining of responsive header
const navLinksContainer = document.querySelector(".nav-links");
const hamburger = document.getElementById("hamburger");
const navbarHeader = document.getElementById("header");

function toggleMenu() {
  navLinksContainer.classList.toggle("active");
}
hamburger.addEventListener("click", function (event) {
  event.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (event) {
  if (
    navLinksContainer.classList.contains("active") &&
    !navbarHeader.contains(event.target)
  ) {
    toggleMenu();
  }
});
// end of responsive header
