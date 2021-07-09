//Mobile Menu
const burger = document.querySelector(".burger");
const navItems = document.querySelector(".nav-items");
burger.addEventListener("click", e => {
  if (navItems.classList.contains("hide")) {
    console.log("removing hide");
    navItems.classList.remove("hide");
    burger.classList.add("rotate");
  } else {
    console.log("adding hide");
    navItems.classList.add("hide");
    burger.classList.remove("rotate");
  }
});

//Video Changer
const videoButtons = document.querySelectorAll(".video-button");
const youtube = document.querySelector(".youtube");
videoButtons.forEach(button => {
  const data = button.dataset.src;
  const url = `https://img.youtube.com/vi/${data}/0.jpg`;
  button.style.backgroundImage = `url(${url})`;

  button.addEventListener("click", e => {
    youtube.src = `https://www.youtube.com/embed/${data}`;
  });
});

//Gallery Lightbox
const imageCells = document.querySelectorAll(".image-cell");
const lightbox = document.querySelector(".lightbox");

imageCells.forEach(cell => {
  cell.addEventListener("click", e => {
    const number = cell.parentElement.href.match(/#\w+/)[0];
    const image = cell.style.backgroundImage;
    lightbox.id = number;
    lightbox.firstElementChild.style.backgroundImage = image;
    lightbox.style.display = "block";
  });
});

lightbox.addEventListener("click", e => {
  lightbox.style.display = "none";
});