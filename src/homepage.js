import "./styles/homepage.css";

function createSection(title) {
  const div = document.createElement("div");
  const heading = document.createElement("h2");
  heading.textContent = title;
  heading.classList.add("homepage-heading");
  div.appendChild(heading);
  return div;
}

export function loadHomePage() {
  const content = document.getElementById("content");

  const hero = document.createElement("div");
  hero.classList.add("hero");

  const heroHeading = document.createElement("h1");
  heroHeading.textContent = "Welcome to TenWeeks Breakfast Lounge!";
  heroHeading.classList.add("hero-heading");

  const heroSubtext = document.createElement("p");
  heroSubtext.textContent = "Nestled in the heart of Tenwek, Bomet County";
  heroSubtext.classList.add("hero-subtext");

  const heroBtn = document.createElement("button");
  heroBtn.textContent = "View Our Menu";
  heroBtn.classList.add("hero-btn");

  hero.appendChild(heroHeading);
  hero.appendChild(heroSubtext);
  hero.appendChild(heroBtn);
  content.appendChild(hero);

  //Quote Section
  const quoteDiv = document.createElement("div");
  quoteDiv.classList.add("quote-section");
  const quote = document.createElement("blockquote");
  quote.textContent =
    "TenWeeks Breakfast Lounge is a hidden gem for breakfast lovers!";
  const strong = document.createElement("strong");
  strong.textContent = " - A satisfied customer";
  quoteDiv.appendChild(quote);
  quoteDiv.appendChild(strong);
  content.appendChild(quoteDiv);

  // Opening Hours Section
  const openingHoursDiv = createSection("Opening Hours");
  openingHoursDiv.classList.add("section");

  const openingHoursList = document.createElement("ul");
  openingHoursList.classList.add("opening-hours-list");
  const days = [
    "Monday: 6am - 6pm",
    "Tuesday: 7am - 8pm",
    "Wednesday: 7am - 8pm",
    "Thursday: 6am - 10pm",
    "Friday: 6am - 10pm",
    "Saturday: 8am - 10pm",
    "Sunday: Closed",
  ];

  days.forEach((day) => {
    const listItem = document.createElement("li");
    listItem.textContent = day;
    openingHoursList.appendChild(listItem);
  });
  openingHoursDiv.appendChild(openingHoursList);
  content.appendChild(openingHoursDiv);

  // Location Section
  const locationDiv = createSection("Location");
  locationDiv.classList.add("section");

  const locationImage = document.createElement("img");
  locationImage.classList.add("location-image");
  locationImage.src =
    "https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  locationImage.alt =
    "Scenic view of Tenwek Waterfalls near the Ten Weeks Lounge in Bomet County";
  locationImage.style.width = "100%";
  locationImage.style.maxWidth = "600px";
  locationDiv.appendChild(locationImage);

  const paraLocation = document.createElement("p");
  paraLocation.classList.add("location-text");
  paraLocation.textContent = "123 Tenwek, Bomet County, Kenya";
  locationDiv.appendChild(paraLocation);

  const descriptionLocation = document.createElement("p");
  descriptionLocation.classList.add("location-text");
  descriptionLocation.textContent =
    "Nestled in the heart of Tenwek, Bomet County, our restaurant offers more than just a meal — it offers a view. Surrounded by the lush green highlands and just a short distance from the breathtaking Tenwek Waterfalls, our location provides a peaceful escape from the busy world. Enjoy your breakfast while taking in the fresh countryside air and serene natural scenery. Whether you're a local resident or visiting from out of town, we invite you to relax, unwind, and experience great food in a truly scenic setting.";
  locationDiv.appendChild(descriptionLocation);

  content.appendChild(locationDiv);
}
