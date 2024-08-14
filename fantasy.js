document.addEventListener("DOMContentLoaded", function () {
	function showFantasyFilm() {
		fetch("data.json")
			.then((response) => response.json())
			.then((jsonData) => {
				// Ищем элемент с классом .fantasy-info
				const contentFantasy = document.querySelector('.fantasy-info');
				jsonData.forEach(item => {
					if (item.name == 'Дом Дракона') {
						const arrCastFantasy = item.cast.split(',');

						contentFantasy.innerHTML = `
							<div class="fantasy-info__image">
								<img src="./assets/images/fantasy_films/title.png"></img>
							</div>
							<div class="fantasy-info__item">
								<p class="fantasy-film--info text--style">${item.year}</p>
								<p class="fantasy-film--info age__item">${item.age}</p>
							</div>
							<p class="fantasy-film--info text--style">${item.genre}</p>
							<div class="rating-cast__box">
								<div class="rating-cast__box--style">
									<div class="rating--style">
										<p class="rating-info rating">${item.rating}</p>
									</div>
									<p class="text">Рейтинг</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="./assets/images/fantasy_films/emma.jpg" alt="Эмма Д'Арси">
									</div>
									<p class="text">${arrCastFantasy[0]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="./assets/images/fantasy_films/olivia.jpg" alt="Оливия Кук">
									</div>
									<p class="text">${arrCastFantasy[1]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="./assets/images/fantasy_films/matt.jpg" alt="Мэтт Смит">
									</div>
									<p class="text">${arrCastFantasy[2]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="./assets/images/fantasy_films/ris.jpg" alt="Рис Иванс">
									</div>
									<p class="text">${arrCastFantasy[3]}</p>
								</div>
							</div>
							<p class="fantasy-film--info">${item.info}</p>
							`
					}
				})
			})
	}

	showFantasyFilm()

	//Отзывы

	function loadReviews() {
		//Добавляем заголовок в блок отзывы
		const reviewsList = document.getElementById('reviewsList');
		const headerHTML = `<h2>Ваши отзывы</h2>`
		reviewsList.insertAdjacentHTML('afterbegin', headerHTML);

		const reviewsFantasy = JSON.parse(localStorage.getItem('reviewsFantasy')) || []; //получаем и парсим ниже подробнее будет

		const reviewsHTML = reviewsFantasy.map(review => `  
        <div class="review-item">
            <h3>${review.reviewName} (${review.reviewRating})</h3>
            <p>${review.reviewComment}</p>
        </div>
    `).join(''); //проходимся по каждому мапом создаём новые массивы и создаём разметку отзыва

		reviewsList.insertAdjacentHTML('beforeend', reviewsHTML);
	}

	function saveReview(review) { //парсим и ищем по ключу 'reviews'  если ничего нет создаём пустой массив если есть добавляем отзыв и отправляем обратно
		const reviewsFantasy = JSON.parse(localStorage.getItem('reviewsFantasy')) || [];
		reviewsFantasy.push(review);
		localStorage.setItem('reviewsFantasy', JSON.stringify(reviewsFantasy));
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
})