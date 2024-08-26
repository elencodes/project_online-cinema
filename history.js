document.addEventListener("DOMContentLoaded", function () {
	// Ищем элемент с классом .history-info для вывода информации по фильму/сериалу
	const contentHistory = document.querySelector('.history-info');

	function showHistoryFilm() {
		//Создаём промис - методом fetch отправляем GET-запрос на указанный адрес
		fetch("data.json")
			//Работаем с первым обработчиком then
			.then(response => {
				//Если промис был обработан, преобразовываем данные в формат JSON
				if (response.ok) {
					return response.json();
				} else {
					//Если промис НЕ был обработан, то отклоняем его и выводим код статуса ответа (код ошибки)
					return Promise.reject(`Статус ошибки: ${response.status}`);
				}
			})
			//во втором обработчике then выводим данные на страницу
			.then((jsonData) => {
				jsonData.forEach(item => {
					if (item.name == 'Чемпион мира') {
						const arrCastHistory = item.cast.split(',');

						contentHistory.innerHTML = `
							<div class="history-info__image">
								<img src="./assets/images/history_films/world-champion_title.png"></img>
							</div>
							<div class="history-info__item">
								<p class="history-film--info text--style">${item.year}</p>
								<p class="history-film--info age__item">${item.age}</p>
							</div>
							<p class="history-film--info text--style">${item.genre}</p>
							<div class="rating-cast__box">
								<div class="rating-cast__box--style">
									<div class="rating--style">
										<p class="rating-info rating">${item.rating}</p>
									</div>
									<p class="text">Рейтинг</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="./assets/images/history_films/habenskiy.png" alt="Константин Хабенский">
									</div>
									<p class="text">${arrCastHistory[0]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="./assets/images/history_films/yankovskiy.png" alt="Иван Янковский">
									</div>
									<p class="text">${arrCastHistory[1]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="./assets/images/history_films/vdovichenkov.png" alt="Владимир Вдовиченков">
									</div>
									<p class="text">${arrCastHistory[2]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="./assets/images/history_films/dobronravov.png" alt="Виктор Добронравов">
									</div>
									<p class="text">${arrCastHistory[3]}</p>
								</div>
							</div>
							<p class="history-film--info">${item.info}</p>
							`
					}
				})
			})
			//catch сработает, если запросы then НЕ выполнены успешно (например, отвалился интернет, нет данных на сервере и т.д.)
			.catch((error) => {
				//выводим на экран текст об ошибке (понятный для пользователя)
				contentHistory.textContent = `Сервер недоступен. Пожалуйста, попробуйте позже`
				//выводим в консоль код статуса ответа (код ошибки)
				console.log(error);
			})
			.finally(function () {
				//выводим в любом случае
				console.log('Были запрошены данные с сервера');
			});
	}

	showHistoryFilm()


	//Отзывы

	function loadReviews() {
		//Добавляем заголовок в блок отзывы
		const reviewsList = document.getElementById('reviewsList');
		const headerHTML = `<h2>Ваши отзывы</h2>`
		reviewsList.insertAdjacentHTML('afterbegin', headerHTML);

		const reviewsHistory = JSON.parse(localStorage.getItem('reviewsHistory')) || []; //получаем и парсим ниже подробнее будет

		const reviewsHTML = reviewsHistory.map(review => `  
        <div class="review-item">
            <h3>${review.reviewName} (${review.reviewRating})</h3>
            <p>${review.reviewComment}</p>
        </div>
    `).join(''); //проходимся по каждому мапом создаём новые массивы и создаём разметку отзыва

		reviewsList.insertAdjacentHTML('beforeend', reviewsHTML);
	}

	function saveReview(review) { //парсим и ищем по ключу 'reviews'  если ничего нет создаём пустой массив если есть добавляем отзыв и отправляем обратно
		const reviewsHistory = JSON.parse(localStorage.getItem('reviewsHistory')) || [];
		reviewsHistory.push(review);
		localStorage.setItem('reviewsHistory', JSON.stringify(reviewsHistory));
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