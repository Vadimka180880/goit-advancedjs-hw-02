import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import pictures from './picturesData.json';


const createGalleryMarkup = pictures => {
  return pictures
    .map(
      ({ preview, original, description }) => `
      <li class="gallery_item">
        <a href="${original}" class="gallery_link">
          <img src="${preview}" alt="${description}" class="gallery_image" />
        </a>
      </li>
    `
    )
    .join('');
};


const galleryElement = document.querySelector('.gallery');

galleryElement.innerHTML = createGalleryMarkup(pictures);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', 
  captionDelay: 250, 
  overlayOpacity: 0.8, 
});