import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryCreate = galleryItems
  .map(
    (item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="Image description"
    />
  </a>
</li>`
  )
  .join("");

galleryList.innerHTML += galleryCreate;

galleryList.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  const imageClick = event.target.classList.contains("gallery__image");
  if (!imageClick) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onCloseByEsc);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onCloseByEsc);
      },
    }
  );
  instance.show();

  function onCloseByEsc(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

console.log(galleryItems);
