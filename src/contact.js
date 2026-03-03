export function loadContactPage() {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  content.appendChild(heading);

  const contactInfoDiv = document.createElement("div");
  const phonePara = document.createElement("p");
  phonePara.textContent = "Phone: +254 123 456 789";
  const emailPara = document.createElement("p");
  emailPara.textContent = "tenweekslounge@gmail.com";
  const addressPara = document.createElement("p");
  addressPara.textContent = "123 Tenwek, Bomet County, Kenya";

  contactInfoDiv.appendChild(phonePara);
  contactInfoDiv.appendChild(emailPara);
  contactInfoDiv.appendChild(addressPara);

  content.appendChild(contactInfoDiv);
}
