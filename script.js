import { gallery } from "./data/gallery.js";

const galleryContainer = document.getElementById("gallery-container");

gallery.forEach((category) => {
  const section = document.createElement("section");

  section.innerHTML = `
    <h2>${category.heading}</h2>
    <div class="category-container">
    ${category.images
      .map((image) => {
        return `
        <div class="img-card">
          <img src="${image.filename}" alt="${image.title}" />
        </div>
      `;
      })
      .join("")}
    </div>
  `;
  galleryContainer.appendChild(section);
});
