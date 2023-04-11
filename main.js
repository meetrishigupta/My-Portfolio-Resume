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

let allnavigation = document.querySelectorAll(".nav-menu a");

console.log(allnavigation);
for (var i = 0; i < allnavigation.length; i++) {
  allnavigation[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionId = this.textContent.trim().toLowerCase();
    console.log(targetSectionId);
    var targetSection = document.getElementById(targetSectionId);
    var interval = setInterval(function () {
      var targetsectionCordinates = targetSection.getBoundingClientRect();
      if (targetsectionCordinates.top <= 0) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 150);
    }, 150);
  });
}

//hamburger

const hamburger = document.querySelector(".hamburger");
const NavMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  NavMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    console.log("works");
    hamburger.classList.remove("active");
    NavMenu.classList.remove("active");
  })
);
