

const maintop = document.querySelector(".bottomtoUp");
window.addEventListener("scroll",() => {
    if(window.pageYOffset > 100){
        maintop.classList.add("active");
    }
    else{
        maintop.classList.remove("active");
    }
})