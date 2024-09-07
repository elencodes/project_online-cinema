import '../scss/style.scss';

export {
	loadReviews,
	showReview
}

function loadReviews(reviewFilm) {
	//Добавляем заголовок в блок отзывы
	const reviewsList = document.getElementById('reviewsList');
	const headerHTML = `<h2>Ваши отзывы</h2>`
	reviewsList.insertAdjacentHTML('afterbegin', headerHTML);

	const reviewsJson = JSON.parse(localStorage.getItem(reviewFilm)) || []; //получаем и парсим ниже подробнее будет

	const reviewsHTML = reviewsJson.map(review => `  
		<div class="review-item">
			<h3>${review.reviewName} (${review.reviewRating})</h3>
			<p>${review.reviewComment}</p>
		</div>
	`).join(''); //проходимся по каждому мапом создаём новые массивы и создаём разметку отзыва

	reviewsList.insertAdjacentHTML('beforeend', reviewsHTML);
}

function showReview(reviewFilm) {
	document.getElementById('reviewForm').addEventListener('submit', (event) => {
		event.preventDefault(); //сбрасываем естественное сосотояние и получаем значения из формы при отправке формы при нажатии submit кнопки
		checkFormValidityName();

		function saveReview(review) { //парсим и ищем по ключу 'reviews'  если ничего нет создаём пустой массив если есть добавляем отзыв и отправляем обратно
			const reviewsJson = JSON.parse(localStorage.getItem(reviewFilm)) || [];
			reviewsJson.push(review);
			localStorage.setItem(reviewFilm, JSON.stringify(reviewsJson));
		}

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
	})
};


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