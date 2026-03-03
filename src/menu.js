export function loadMenuPage() {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  content.appendChild(heading);
}
