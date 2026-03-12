import "./styles/about.css";

export function loadAboutPage() {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.classList.add("about-heading");
  heading.textContent = "About Us";
  content.appendChild(heading);

  const image = document.createElement("img");
  image.classList.add("about-image");
  image.src =
    "https://cdn.pixabay.com/photo/2020/01/09/18/59/hotel-4753669_1280.jpg";
  image.alt = "Hotel interior with tables and chairs";
  image.style.width = "100%";
  image.style.maxWidth = "600px";
  content.appendChild(image);

  const description = document.createElement("p");
  const descriptions = [
    "Welcome to our restaurant! We are passionate about serving delicious food and providing an exceptional dining experience. Our team of talented chefs uses the freshest ingredients to create mouthwatering dishes that will satisfy your cravings. Whether you're in the mood for a hearty meal or a light snack, we have something for everyone. Join us and indulge in a culinary journey that will leave you wanting more!",
    "Our restaurant is committed to sustainability and supporting local farmers. We source our ingredients from nearby farms and prioritize organic and ethically produced products. By choosing to dine with us, you are not only treating yourself to a delicious meal but also contributing to a more sustainable food system. We believe in creating a positive impact on our community and the environment while delivering exceptional flavors to your plate.",
    "Our restaurant is a cozy and welcoming space where you can relax and enjoy your meal. We have a warm and inviting atmosphere that is perfect for intimate dinners, family gatherings, or casual outings with friends. Our friendly staff is dedicated to providing excellent service and ensuring that your dining experience is memorable. Come and join us for a delightful culinary adventure that will tantalize your taste buds and leave you with unforgettable memories!",
  ];

  descriptions.forEach((text) => {
    const para = document.createElement("p");
    para.textContent = text;
    para.classList.add("about-description");
    content.appendChild(para);
  });
}
