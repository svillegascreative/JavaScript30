const slidingImages = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function slideImages(e) {
  slidingImages.forEach( (image) => {
    const windowBottom = window.innerHeight + window.scrollY;
    const slideTrigger = image.offsetTop + (image.height / 2);
    if ( windowBottom >= slideTrigger ) {
      image.classList.add('active');
    }

    const imageBottom = image.offsetTop + image.height;
    if ( imageBottom <= window.scrollY ) {
      image.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(slideImages));
