import { gallery } from "./data/gallery.js";

const galleryContainer = document.getElementById("gallery-container");

gallery.forEach((category) => {
  const section = document.createElement("section");
  section.setAttribute("id", category.heading.toLowerCase());

  section.innerHTML = `
    <h2>${category.heading}</h2>
    <div class="category-container">
    ${category.images
      .map((image) => {
        return `
        <div class="img-card">
          <img src="${image.filename}" alt="${image.title}" />
          <div class="img-card-overlay">
            <h3>${image.title}</h3>
            <button class="heart-btn">❤</button>
          </div>
        </div>
      `;
      })
      .join("")}
    </div>
  `;
  galleryContainer.appendChild(section);
});
