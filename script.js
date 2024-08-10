document.addEventListener("DOMContentLoaded", function () {
	new Swiper('.swiper', {
		//активация переключения с помощью стрелок
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		//количество слайдов для показа
		slidesPerView: 7,
		//Отключение функционала, если слайдов меньше чем нужно
		watchOverflow: true,
		//количество пролистываемых слайдов
		slidesPerGroup: 3,
		//Скорость прокрутки
		speed: 600,
		//Отступ между слайдами
		spaceBetween: -27
	});

	function fetchMovies() {
		fetch("data.json")
			.then((response) => response.json())
			.then((jsonData) => {
				displayMovies(jsonData, "Комедия", ".comedy-gallery .swiper-wrapper");
				displayMovies(jsonData, "Ужасы", ".horror-gallery .swiper-wrapper");
				displayMovies(jsonData, "Фэнтези", ".fantasy-gallery .swiper-wrapper");
				displayMovies(jsonData, "Триллер", ".thriller-gallery .swiper-wrapper");
				displayMovies(jsonData, "Исторический", ".history-gallery .swiper-wrapper");
				displayMovies(jsonData, "Детектив", ".detective-gallery .swiper-wrapper");
				displayMovies(jsonData, "Экранизация", ".basedOnBooks-gallery .swiper-wrapper");
			});
	}

	function displayMovies(movies, genre, wrapperSelector) {
		const swiperWrapper = document.querySelector(wrapperSelector);

		for (let i = 0; i < movies.length; i++) {
			const movie = movies[i];

			if (movie.genre === genre) {
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

	fetchMovies();
});


//слайдер главный
const imgMain = document.getElementById('carouselMain');
const rightBtnMain = document.getElementById('right-btn');
const leftBtnMain = document.getElementById('left-btn');

let picturesMain = [
	"./assets/images/girlsbisuness.png",
	"./assets/images/luna.png",
	"./assets/images/horse.png",
	"./assets/images/ivanushki.png",
	"./assets/images/lobo.png",
	"./assets/images/magic.png",
	"./assets/images/maria.png",
	"./assets/images/slave.png",
	"./assets/images/weekend.png",
];

imgMain.src = picturesMain[0];
let positionMain = 0;

const moveRight = () => {
	if (positionMain >= picturesMain.length - 1) {
		positionMain = 0
		imgMain.src = picturesMain[positionMain];
		return;
	}
	imgMain.src = picturesMain[positionMain + 1];
	positionMain++;
}

const moveLeft = () => {
	if (positionMain < 1) {
		positionMain = picturesMain.length - 1;
		imgMain.src = picturesMain[positionMain];
		return;
	}
	imgMain.src = picturesMain[positionMain - 1];
	positionMain--;
}

rightBtnMain.addEventListener("click", moveRight);
leftBtnMain.addEventListener("click", moveLeft);