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
//Listener for Form
document.getElementsByClassName('contact-form').addEventListener('submit', submitForm);
function submitForm(dummy){
dummy.preventDefault(); 
console.log(123);
}