//for bottom to top scroll button
window.addEventListener("scroll", () => {
  let maintop = document.querySelector(".bottomtoUp");
  if (window.pageYOffset > 100) {
    maintop.classList.add("active");
  } else {
    maintop.classList.remove("active");
  }

  maintop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
});
// Listener for Form

let allnavigation = document.querySelectorAll("nav-menu a");

console.log(allnavigation);
for (var i = 0; i < allnavigation.length; i++) {
  allnavigation[i].addEventListener('click', function (event) {
    event.preventDefault();
  });
}
