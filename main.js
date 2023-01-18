

window.addEventListener("scroll", () => {
    let maintop = document.querySelector(".bottomtoUp");
    if(window.pageYOffset > 100){
        maintop.classList.add("active")
    }
    else{
        maintop.classList.remove("active");
    }
})



function top(){
   window.pageYOffset =0; 
}

// top.addEventListener("click", ()=> {
//     window.pageYOffset = 0;
// })

console.log(maintop)
