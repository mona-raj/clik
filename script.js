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
                  <button class="heart-btn" data-category="${
                    category.heading
                  }" data-index="${index}">❤</button>
                  <span data-category="${
                    category.heading
                  }" data-index="${index}">${image.likes} likes</span>
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

function handleLikes() {
  const heartButtons = document.querySelectorAll(".heart-btn");

  Array.from(heartButtons).forEach((heartBtn) => {
    const dataCategory = heartBtn.getAttribute("data-category");
    const dataIndex = heartBtn.getAttribute("data-index");

    heartBtn.addEventListener("click", () => {
      const category = gallery.filter((cat) => cat.heading == dataCategory);
      const image = category[0].images.filter((_, index) => index == dataIndex);
      let likes = image[0].likes;

      const isActive = heartBtn.classList.contains("active");
      isActive ? likes : likes++;
      heartBtn.classList.toggle("active");
      console.log(likes + " likes");

      const likeSpan = document.querySelector(
        `.img-popup-like-container span[data-category="${dataCategory}"][data-index="${dataIndex}"]`
      );
      likeSpan.textContent = `${likes} likes`;
    });
  });
}

renderGallery();
handlePopup();
handleLikes();
