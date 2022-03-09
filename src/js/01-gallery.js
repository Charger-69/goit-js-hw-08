import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const lighthBoxMarkup = (item) => {
  const { description, original, preview } = item;

  return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
};

const lightBoxGalleryIn = galleryItems.map(lighthBoxMarkup).join("");

galleryEl.insertAdjacentHTML("beforeend", lightBoxGalleryIn);
let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "botton",
});



// const handler = (event) => {
//   event.preventDefault();
//   let gallery = new SimpleLightbox(".gallery a", {
//     captionsData: "alt",
//     captionDelay: 250,
//   });
//   return gallery;
// };

// galleryEl.insertAdjacentHTML('beforeend', lightBoxGalleryIn)
// galleryEl.addEventListener('click', handler)