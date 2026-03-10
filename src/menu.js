function createMenuSection(title, items) {
  const div = document.createElement("div");

  const heading = document.createElement("h2");
  heading.textContent = title;
  div.appendChild(heading);

  const list = document.createElement("ul");
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });

  div.appendChild(list);
  return div;
}

export function loadMenuPage() {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  content.appendChild(heading);

  const appetizers = [
    "Salad",
    "Stuffed Mushrooms",
    "Garlic Bread",
    "Pumpkin Soup",
    "Potato Wedges",
  ];

  const mains = [
    "Grilled Chicken",
    "Steak",
    "Roasted Goat",
    "Beef Fry",
    "Fish and Chips",
    "Traditional Veggies",
    "Ugali and Sukuma",
  ];

  const beverages = [
    "Coke",
    "Fanta",
    "Sprite",
    "Juice",
    "Water",
    "Tea",
    "Coffee",
  ];

  const desserts = [
    "Chocolate Cake",
    "Ice Cream",
    "Fruit Salad",
    "Cheesecake",
    "Pancakes",
  ];

  content.appendChild(createMenuSection("Appetizers", appetizers));
  content.appendChild(createMenuSection("Main Courses", mains));
  content.appendChild(createMenuSection("Beverages", beverages));
  content.appendChild(createMenuSection("Desserts", desserts));
}
