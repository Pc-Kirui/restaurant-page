export function loadHomePage() {
  console.log("Webpack is working!");
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Bearys Breakfast Bar!";
  content.appendChild(heading);

  const para = document.createElement("p");
  para.textContent =
    "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
  content.appendChild(para);
}
