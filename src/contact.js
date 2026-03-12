import "./styles/contact.css";

export function loadContactPage() {
  const content = document.getElementById("content");
  // const contactInfoDiv = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  heading.classList.add("contact-heading");
  content.appendChild(heading);

  const subheading = document.createElement("p");
  subheading.textContent =
    "We'd love to hear from you. Visit us or reach out anytime!";
  subheading.classList.add("contact-subheading");
  content.appendChild(subheading);

  const card = document.createElement("div");
  card.classList.add("contact-card");

  const contacts = [
    { icon: "📞", label: "Phone", value: "+254 123 456 789" },
    { icon: "✉️", label: "Email", value: "tenweekslounge@gmail.com" },
    { icon: "📍", label: "Address", value: "123 Tenwek, Bomet County, Kenya" },
    {
      icon: "🕐",
      label: "Hours",
      value: "Mon – Fri: 6am–10pm | Sat – Sun: 8am–10pm",
    },
  ];

  contacts.forEach(({ icon, label, value }) => {
    const row = document.createElement("div");
    row.classList.add("contact-row");

    const iconSpan = document.createElement("span");
    iconSpan.textContent = icon;
    iconSpan.classList.add("contact-icon");

    const textDiv = document.createElement("div");
    textDiv.classList.add("contact-text");

    const labelEl = document.createElement("strong");
    labelEl.textContent = label;
    labelEl.classList.add("contact-label");

    const valueEl = document.createElement("p");
    valueEl.textContent = value;
    valueEl.classList.add("contact-value");

    textDiv.appendChild(labelEl);
    textDiv.appendChild(valueEl);
    row.appendChild(iconSpan);
    row.appendChild(textDiv);
    card.appendChild(row);
  });
  content.appendChild(card);
}
