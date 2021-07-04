const burger = document.querySelector(".burger");
const navItems = document.querySelector(".nav-items");
burger.addEventListener("click", e => {
  if(navItems.classList.contains("hide")){
    console.log("removing hide");
    navItems.classList.remove("hide");
    burger.classList.add("rotate");
  } else {
    console.log("adding hide");
    navItems.classList.add("hide");
    burger.classList.remove("rotate");
  }
});