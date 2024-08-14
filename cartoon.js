const json = 'data.json';

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

		const mainMovie = data.find(movie => movie.name === "Исповедь неполноценного человека");

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
				actorBlock.className = 'rating-cast__box--style';
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


//Отзывы

function loadReviews() {
	const reviewsList = document.getElementById('reviewsList');
	const reviewsCartoon = JSON.parse(localStorage.getItem('reviewsCartoon')) || []; //получаем и парсим ниже подробнее будет
	reviewsList.innerHTML = reviewsCartoon.map(review => `  
        <div class="review-item">
            <h3>${review.reviewName} (${review.reviewRating})</h3>
            <p>${review.reviewComment}</p>
        </div>
    `).join(''); //проходимся по каждому мапом создаём новые массивы и создаём разметку отзыва
}

function saveReview(review) { //парсим и ищем по ключу 'reviews'  если ничего нет создаём пустой массив если есть добавляем отзыв и отправляем обратно
	const reviewsCartoon = JSON.parse(localStorage.getItem('reviewsCartoon')) || [];
	reviewsCartoon.push(review);
	localStorage.setItem('reviewsCartoon', JSON.stringify(reviewsCartoon));
}

document.getElementById('reviewForm').addEventListener('submit', (event) => {
	event.preventDefault(); //сбрасываем естественное сосотояние и получаем значения из формы при отправке формы при нажатии submit кнопки
	checkFormValidityName();
	const reviewName = document.getElementById('reviewName').value;
	const reviewComment = document.getElementById('reviewComment').value;
	const reviewRating = document.getElementById('reviewRating').value;

	if (reviewName && reviewComment && reviewRating) {
		const review = {
			reviewName,
			reviewComment,
			reviewRating
		};
		displayReview(review); // тут отзыв отображается на странице через другую функцию ниже
		saveReview(review); // тут мы через функцию выше в локал сторадж сохраняем
		document.getElementById('reviewForm').reset(); //тут очистка формы после отправки методом .reset()
	}
});

function displayReview(review) {
	const reviewsList = document.getElementById('reviewsList');
	const reviewElement = document.createElement('div');
	reviewElement.className = 'review-item';
	reviewElement.innerHTML = `
        <h3>${review.reviewName} (${review.reviewRating})</h3>
        <p>${review.reviewComment}</p>
    `;
	reviewsList.appendChild(reviewElement);
}
loadReviews();

//Добавляем заголовок в блок отзывы
const reviewsList = document.getElementById('reviewsList');
reviewsList.innerHTML = `<h2>Ваши отзывы</h2>`

//Валидация имени - проверка имени на корректность введенных данных
function validateName(name) {
	let regex = /^[а-яёa-z\s]+$/i; //содержит только буквы и пробелы
	return regex.test(name);
}

//Ищем объекты формы в HTML документе для вывода сообщения об ошибке
const errorUserName = document.querySelector(`.error__userName`);

//Ищем объекты формы (имя) в HTML документе
const reviewName = document.getElementById('reviewName');

//Расширенная валидация имени пользователя (функция еще не вызывается)
function checkFormValidityName() {
	if (reviewName.value === "") {
		errorUserName.textContent = `Введите Ваше имя`;
		errorUserName.classList.add('error__message');
		reviewName.classList.add('error');
		reviewName.style.margin = "0 0 1rem 0";
	} else if (reviewName.value.length < 2) {
		//(если имя введено некорректно - появляются сообщения об ошибке)
		errorUserName.textContent = `Имя должно содержать от 2 символов`;
		errorUserName.classList.add('error__message');
		reviewName.classList.add('error');
		reviewName.style.margin = "0 0 1rem 0";
	} else if (validateName(reviewName.value) === false) {
		//(если имя введено некорректно - появляются сообщения об ошибке)
		errorUserName.textContent = `Имя должно содержать буквы и пробелы`;
		errorUserName.classList.add('error__message');
		reviewName.classList.add('error');
		reviewName.style.margin = "0 0 1rem 0";
	} else {
		//(если имя введено корректно - сообщения об ошибке исчезают)
		errorUserName.textContent = ``;
		errorUserName.classList.remove('error__message');
		reviewName.classList.remove('error');
		reviewName.style.margin = "0 0 1rem 0";
	}
}

//Проверка на валидность введенного имени
//(событие input срабатывает при вводе или удалении каждого символа)
reviewName.addEventListener(`change`, checkFormValidityName);