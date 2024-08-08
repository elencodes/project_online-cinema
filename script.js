document.addEventListener("DOMContentLoaded", function () {
  fetchMovies();
});

function fetchMovies() {
  fetch("data.json")
  .then((response) => response.json())
  .then((jsonData) => {
  displayMovies(jsonData, "Комедия", ".comedy-gallery .swiper-wrapper");
  displayMovies(jsonData, "Ужасы", ".horror-gallery .swiper-wrapper");
  });
}

function displayMovies(movies, genre, wrapperSelector) {
  const swiperWrapper = document.querySelector(wrapperSelector);

  for (let i = 0; i < movies.length; i++) {
      const movie = movies[i];

      if (movie.genre === genre){
          const swiperSlide = document.createElement('div');
          swiperSlide.classList.add('swiper-slide');

          const imageSlider = document.createElement('div');
          imageSlider.classList.add('image-slider');

          const image = document.createElement('img');
          image.src = movie.url;
          image.alt = movie.name;

          const movieName = document.createElement('h3');
          movieName.classList.add('movie-name');
          movieName.textContent = movie.name;

          imageSlider.appendChild(image);
          imageSlider.appendChild(movieName);
          swiperSlide.appendChild(imageSlider);
          swiperWrapper.appendChild(swiperSlide);
      }
  }
}