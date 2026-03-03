import { loadHomePage } from "./homepage.js";
import { loadAboutPage } from "./about.js";
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contact.js";

//Load homepage when page loads
loadHomePage();

//get all nav buttons
const homeBtn = document.querySelector("button:nth-child(1");
const aboutBtn = document.querySelector("button:nth-child(2)");
const menuBtn = document.querySelector("button:nth-child(3)");
const contactBtn = document.querySelector("button:nth-child(4)");

//function to clear content
function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

//add event listeners to buttons
homeBtn.addEventListener("click", () => {
  clearContent();
  loadHomePage();
});

aboutBtn.addEventListener("click", () => {
  clearContent();
  loadAboutPage();
});

menuBtn.addEventListener("click", () => {
  clearContent();
  loadMenuPage();
});

contactBtn.addEventListener("click", () => {
  clearContent();
  loadContactPage();
});
