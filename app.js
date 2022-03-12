const Toggle = document.querySelector("#btn-toggle");
const Nav = document.querySelector(".menu-list");

Toggle.addEventListener("click", () => {
  Nav.classList.toggle("toggle-responsive");
});
