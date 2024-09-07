import '../scss/style.scss';

import {
	loadReviews,
	showReview,
} from './reviews.js';

loadReviews('reviewsHorror');
showReview('reviewsHorror');

const json = '../../data.json';

const movieTitle = document.querySelector('#movieTitle');
const movieYear = document.querySelector('#movieYear');
const movieAge = document.querySelector('#movieAge');
const movieGenre = document.querySelector('#movieGenre');
const rating = document.querySelector('#movieRating');
const actors = document.querySelector('#movieActors');
const movieDescription = document.querySelector('#movieDescription');
const director = document.querySelector('#movieDirector');

async function loadMovieData() {
	try {
		const response = await fetch(json);
		const data = await response.json();

		const mainMovie = data.find(movie => movie.name === 'Солнцестояние');

		if (mainMovie) {
			movieTitle.textContent = mainMovie.name;
			movieYear.textContent = mainMovie.year;
			movieAge.textContent = mainMovie.age;
			movieGenre.textContent = mainMovie.genre;
			rating.textContent = mainMovie.rating;
			director.textContent = mainMovie.director;

			const actorList = mainMovie.cast.slice(0, 4);

			actorList.forEach(actor => {
				const actorBlock = document.createElement('div');
				actorBlock.className = 'rating-cast__box--style remove__item';
				actorBlock.innerHTML = `
                <div class="cast__item">
                    <img src="${actor.photo}" alt="${actor.name}">
                </div>
                <p class="text">${actor.name}</p>
                `;
				actors.appendChild(actorBlock);
			});

			const description = mainMovie.info;
			const shortDescription = description.slice(0, 195) + (description.length > 195 ? '...' : '');

			const renderDescription = (isExpanded) => {
				movieDescription.classList.toggle('description-expanded', isExpanded);
				movieDescription.innerHTML = `
                    ${isExpanded ? description : shortDescription}
                    <a href="#" id="toggleDescriptionLink">
                        ${isExpanded ? 'Свернуть описание' : 'Все детали о фильме'}
                    </a>
                `;

				const toggleLink = document.querySelector('#toggleDescriptionLink');
				toggleLink.addEventListener('click', (evt) => {
					evt.preventDefault();
					renderDescription(!isExpanded);
				});
			};

			renderDescription(false);
		} else {
			console.error('Фильм не найден');
		}
	} catch (error) {
		console.error('Ошибка при загрузке данных:', error);
	}
}

loadMovieData();