import { gallery } from "./data/gallery.js";

function renderGallery() {
  const galleryContainer = document.getElementById("gallery-container");

  gallery.forEach((category) => {
    const section = document.createElement("section");
    section.setAttribute("id", category.heading.toLowerCase());

    section.innerHTML = `
    <h2>${category.heading}</h2>
    <div class="category-container">
    ${category.images
      .map((image, index) => {
        return `
        <div class="img-card">
            <img src=${image.filename} alt=${image.title} data-category="${
          category.heading
        }" data-index="${index}"/>
            <div class="img-card-overlay">
              <h3>${image.title}</h3>
              <button class="heart-btn">❤</button>
            </div>

            <div class="img-popup" data-category="${
              category.heading
            }" data-index="${index}">
              <div>
                <img src=${image.filename} alt=${image.title} />
              </div>
              <div class="img-popup-details">
                <h2>${image.title}</h2>
                <p>
                  ${image.description}
                </p>
                <div class="img-tag-container">
                  <img src="../icons/tags.svg" alt="Tags">
                  ${image.tags
                    .map((tag) => {
                      return `
                    <span class="img-tag">${tag}</span>
                    `;
                    })
                    .join("")}
                </div>
                <div class="img-popup-like-container">
                  <button class="heart-btn active">❤</button>
                  <span>${image.likes} likes</span>
                </div>
              </div>
              <button class="img-popup-close-btn" data-category="${
                category.heading
              }" data-index="${index}">
                <img src="../icons/close.svg" alt="">
              </button>
            </div>
          </div>
      `;
      })
      .join("")}
    </div>
  `;
    galleryContainer.appendChild(section);
  });
}

function handlePopup() {
  const imgCards = document.querySelectorAll(".img-card img");

  Array.from(imgCards).forEach((imgCard) => {
    const dataCategory = imgCard.getAttribute("data-category");
    const dataIndex = imgCard.getAttribute("data-index");

    const popup = document.querySelector(
      `.img-popup[data-category="${dataCategory}"][data-index="${dataIndex}"]`
    );

    const closeBtn = document.querySelector(
      `.img-popup-close-btn[data-category="${dataCategory}"][data-index="${dataIndex}"]`
    );

    imgCard.addEventListener("click", () => {
      if (popup) {
        popup.classList.add("active");
        console.log("clicked");
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
        console.log("closed");
      });
    }
  });
}

renderGallery();
handlePopup();
