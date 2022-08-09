// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилейт
import 'simplelightbox/dist/simple-lightbox.min.css';

const paletteContainer = document.querySelector('.gallery');

function createPhotoCardMarkup (galleryItems) {
    return galleryItems.map(({ preview, original, description}) => {
        return `
        <div class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>
        `;
    }
    ).join('');
}

const cardsMarkup = createPhotoCardMarkup(galleryItems);
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: '250'
    
})

console.log(galleryItems);

