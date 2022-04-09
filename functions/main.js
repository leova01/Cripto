/*Navbar*/
const body = document.querySelector("body");
const Navbar = document.querySelector(".Navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn, .option1");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const option5 = document.querySelector(".option5");
const option6 = document.querySelector(".option6");
const option7 = document.querySelector(".option7");

menuBtn.onclick = ()=>{
  Navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  Navbar.classList.remove("show");
  menuBtn.classList.remove("hide");

}
option1.onclick = ()=>{
  body.classList.remove("disabled");
  Navbar.classList.remove("show");
  menuBtn.classList.remove("hide");

}
option2.onclick = ()=>{
  body.classList.remove("disabled");
  Navbar.classList.remove("show");
  menuBtn.classList.remove("hide");

}
option3.onclick = ()=>{
  body.classList.remove("disabled");
  Navbar.classList.remove("show");
  menuBtn.classList.remove("hide");

}
option4.onclick = ()=>{
  body.classList.remove("disabled");
  Navbar.classList.remove("show");
  menuBtn.classList.remove("hide");

}
option5.onclick = ()=>{
  body.classList.remove("disabled");
  Navbar.classList.remove("show");
  menuBtn.classList.remove("hide");

}
option6.onclick = ()=>{
  body.classList.remove("disabled");
  Navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
option7.onclick = ()=>{
  body.classList.remove("disabled");
  Navbar.classList.remove("show");
  menuBtn.classList.remove("hide");

}



window.onscroll = ()=>{
  this.scrollY > 20 ? Navbar.classList.add("sticky") : Navbar.classList.remove("sticky");
}
