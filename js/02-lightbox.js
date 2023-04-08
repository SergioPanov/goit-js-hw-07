import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryCreate = galleryItems
  .map(
    (item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>
</li>`
  )
  .join("");

galleryList.innerHTML += galleryCreate;

let lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});

console.log(galleryItems);
