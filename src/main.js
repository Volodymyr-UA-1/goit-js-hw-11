import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {getImagesByQuery} from './js/pixabay-api';
const formPixabay = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');
formPixabay.addEventListener('submit', (e) =>{
        e.preventDefault();
const inputValue = input.value.trim();
input.value = "";
input.focus();

 if (inputValue === "") {
    iziToast.error({
      message: 'Please enter text!',
      position: 'topCenter',
    });
    return;
  }
  getImagesByQuery(inputValue)
    .then(res => {
      const hits = res.hits;
      if (hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'bottomRight',
          backgroundColor: 'red',
          timeout: 3000,    
          pauseOnHover: true, 
          messageColor: 'white',
        });
        return;
      }
      console.log(hits);
    })
    .catch(error => {
      console.error(error);
    });
})
// import {createGallery,
//         clearGallery,
//         showLoader,
//         hideLoader,
// } from './js/render-functions';


        // Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.
        // Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент. 