import "./styles/menu.css";

function createMenuSection(title, items) {
  const div = document.createElement("div");
  div.classList.add("section");

  const heading = document.createElement("h2");
  heading.textContent = title;
  div.appendChild(heading);

  const list = document.createElement("ul");
  list.classList.add("menu-list");

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("menu-item");

    const itemName = document.createElement("span");
    itemName.textContent = item.name;
    itemName.classList.add("item-name");

    const itemPrice = document.createElement("span");
    itemPrice.textContent = item.price;
    itemPrice.classList.add("item-price");

    listItem.appendChild(itemName);
    listItem.appendChild(itemPrice);
    list.appendChild(listItem);
  });

  div.appendChild(list);
  return div;
}

export function loadMenuPage() {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  heading.classList.add("menu-heading");
  content.appendChild(heading);

  const appetizers = [
    { name: "Salad", price: "Ksh 250" },
    { name: "Stuffed Mushrooms", price: "Ksh 350" },
    { name: "Garlic Bread", price: "Ksh 200" },
    { name: "Pumpkin Soup", price: "Ksh 150" },
    { name: "Potato Wedges", price: "Ksh 150" },
  ];

  const mains = [
    { name: "Grilled Chicken", price: "Ksh 450" },
    { name: "Steak", price: "Ksh 450" },
    { name: "Roasted Goat", price: "Ksh 450" },
    { name: "Beef Fry", price: "Ksh 450" },
    { name: "Fish and Chips", price: "Ksh 600" },
    { name: "Traditional Veggies", price: "Ksh 250" },
    { name: "Ugali and Sukuma", price: "Ksh 200" },
  ];

  const beverages = [
    { name: "Coke", price: "Ksh 150" },
    { name: "Fanta", price: "Ksh 150" },
    { name: "Sprite", price: "Ksh 150" },
    { name: "Juice", price: "Ksh 200" },
    { name: "Water", price: "Ksh 150" },
    { name: "Tea", price: "Ksh 100" },
    { name: "Coffee", price: "Ksh 100" },
  ];

  const desserts = [
    { name: "Chocolate Cake", price: "Ksh 250" },
    { name: "Ice Cream", price: "Ksh 150" },
    { name: "Fruit Salad", price: "Ksh 150" },
    { name: "Cheesecake", price: "Ksh 200" },
    { name: "Pancakes", price: "Ksh 100" },
  ];

  content.appendChild(createMenuSection("Appetizers", appetizers));
  content.appendChild(createMenuSection("Main Courses", mains));
  content.appendChild(createMenuSection("Beverages", beverages));
  content.appendChild(createMenuSection("Desserts", desserts));
}
