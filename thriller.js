import {
	loadReviews,
	showReview,
} from './reviews.js';

loadReviews('reviewsThriller');
showReview('reviewsThriller');

document.addEventListener("DOMContentLoaded", function () {
	// Ищем элемент с классом .thriller-info для вывода информации по фильму/сериалу
	const contentThriller = document.querySelector('.thriller-info');

	function showThrillerFilm() {
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
					if (item.name == 'Исчезнувшая') {
						const arrCastThriller = item.cast.split(',');

						contentThriller.innerHTML = `
							<div class="thriller-info__image thriller-title__image">
								<img src="./assets/images/thrillers/title.png"></img>
							</div>
							<div class="thriller-info__item">
								<p class="thriller-film--info text--style">${item.year}</p>
								<p class="thriller-film--info age__item">${item.age}</p>
							</div>
							<p class="thriller-film--info text--style">${item.genre}</p>
							<div class="rating-cast__box">
								<div class="rating-cast__box--style">
									<div class="rating--style">
										<p class="rating-info rating">${item.rating}</p>
									</div>
									<p class="text">Рейтинг</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="./assets/images/thrillers/ben-affleck.jpg" alt="Бен Аффлек">
									</div>
									<p class="text">${arrCastThriller[0]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="./assets/images/thrillers/rosamund-pike.jpg" alt="Роза Пайк">
									</div>
									<p class="text">${arrCastThriller[1]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="./assets/images/thrillers/neil-patrick-harris.jpg" alt="Нил Патрик">
									</div>
									<p class="text">${arrCastThriller[2]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="./assets/images/thrillers/tyler-perry.jpg" alt="Тайлер Перри">
									</div>
									<p class="text">${arrCastThriller[3]}</p>
								</div>
							</div>
							<p class="thriller-film--info thriller-info--style">${item.info}</p>
					`
					}
				})
			})
			//catch сработает, если запросы then НЕ выполнены успешно (например, отвалился интернет, нет данных на сервере и т.д.)
			.catch((error) => {
				//выводим на экран текст об ошибке (понятный для пользователя)
				contentThriller.textContent = `Сервер недоступен. Пожалуйста, попробуйте позже`
				//выводим в консоль код статуса ответа (код ошибки)
				console.log(error);
			})
			.finally(function () {
				//выводим в любом случае
				console.log('Были запрошены данные с сервера');
			});
	}

	showThrillerFilm()
})