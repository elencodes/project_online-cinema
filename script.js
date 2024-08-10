document.addEventListener("DOMContentLoaded", function () {
	new Swiper('.swiper', {
		//активация переключения с помощью стрелок
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		// позже скорректирую, а то листается по клавиатуре сразу вся галерея - фиксить надо (Лена)
		// //управление свайпером с помощью клавиатуры
		// keyboard: {
		// 	//Включить\выключить
		// 	enabled: true,
		// 	//Включить\выключить только
		// 	//когда слайдер в пределах вьюпорта
		// 	onlyInViewport: true,
		// },
		//количество слайдов для показа
		slidesPerView: 7,
		//Отключение функционала, если слайдов меньше чем нужно
		watchOverflow: true,
		//количество пролистываемых слайдов
		slidesPerGroup: 3,
		//Скорость прокрутки
		speed: 600
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