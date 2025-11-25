import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', 
  captionPosition: 'bottom', 
});
export function createGallery(images){
const gallery  = document.querySelector('.gallery');
images.forEach(image => {
    const listElement = document.createElement('li');

    const link =  document.createElement('a')
    link.href = image.largeImageURL;
    link.title = image.tags;

    const img =  document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;

    
    link.appendChild(img);
    listElement.appendChild(link);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    infoDiv.innerHTML = `
      <p>Likes: ${image.likes}</p>
      <p>Views: ${image.views}</p>
      <p>Comments: ${image.comments}</p>
      <p>Downloads: ${image.downloads}</p>
    `;

    listElement.appendChild(infoDiv);
    gallery.appendChild(listElement);
});
lightbox.refresh();
} 



export function clearGallery(){
   const gallery = document.querySelector('.gallery');
gallery.innerHTML = "";
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('is-hidden');
}