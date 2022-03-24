const openMenu = document.querySelector(".nav");
const mainMenu = document.querySelector(".navList");
const closeMenu = document.querySelector("#crossbtn");

openMenu.addEventListener("click", open);
closeMenu.addEventListener("click", close);

function open() {
  console.log("deleted");
  mainMenu.style.display = "block";
  mainMenu.style.top = "0";
  openMenu.style.opacity = "0";
  //   closeMenu.style.opacity = "1";
  closeMenu.style.display = "block";
}

function close() {
  console.log("Closedd");
  mainMenu.style.display = "none";
  closeMenu.style.display = "none";
  openMenu.style.opacity = "1";
}
