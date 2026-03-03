export function loadAboutPage() {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "About Us";
  content.appendChild(heading);

  const image = document.createElement("img");
  image.src =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlc2FrZmFzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";
  image.alt = "";
  content.appendChild(image);
}
