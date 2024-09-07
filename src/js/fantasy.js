import {
	loadReviews,
	showReview,
} from './reviews.js';

loadReviews('reviewsFantasy');
showReview('reviewsFantasy');

document.addEventListener("DOMContentLoaded", function () {
	// Ищем элемент с классом .fantasy-info для вывода информации по фильму/сериалу
	const contentFantasy = document.querySelector('.fantasy-info');

	function showFantasyFilm() {
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
			//catch сработает, если запросы then НЕ выполнены успешно (например, отвалился интернет, нет данных на сервере и т.д.)
			.catch((error) => {
				//выводим на экран текст об ошибке (понятный для пользователя)
				contentFantasy.textContent = `Сервер недоступен. Пожалуйста, попробуйте позже`
				//выводим в консоль код статуса ответа (код ошибки)
				console.log(error);
			})
			.finally(function () {
				//выводим в любом случае
				console.log('Были запрошены данные с сервера');
			});
	}

	showFantasyFilm()
})