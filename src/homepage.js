export function loadHomePage() {
  console.log("Webpack is working!");
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to TenWeeks Breakfast Lounge!";
  content.appendChild(heading);

  const goldilocksdiv = document.createElement("div");
  // const para = document.createElement("p");
  // para.textContent =
  //   "TenWeeks's has the best tea and porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
  const quote = document.createElement("blockquote");
  quote.textContent =
    "TenWeeks Breakfast Lounge is a hidden gem for breakfast lovers!";
  const strong = document.createElement("strong");
  strong.textContent = " - A satisfied customer";

  // goldilocksdiv.appendChild(para);
  goldilocksdiv.appendChild(quote);
  goldilocksdiv.appendChild(strong);
  content.appendChild(goldilocksdiv);

  const openingHoursDiv = document.createElement("div");
  const openingHoursHeading = document.createElement("h2");
  openingHoursHeading.textContent = "Opening Hours";
  openingHoursDiv.appendChild(openingHoursHeading);

  const openingHoursList = document.createElement("ul");
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

  const locationDiv = document.createElement("div");
  const locationHeading = document.createElement("h2");
  locationHeading.textContent = "Location";
  locationDiv.appendChild(locationHeading);

  const paraLocation = document.createElement("p");
  paraLocation.textContent = "123 Tenwek, Bomet County, Kenya";
  locationDiv.appendChild(paraLocation);

  content.appendChild(locationDiv);
}
