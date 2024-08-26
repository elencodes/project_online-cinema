import {
	loadReviews,
	showReview,
} from './reviews.js';

loadReviews('reviewsHistory');
showReview('reviewsHistory');

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
})