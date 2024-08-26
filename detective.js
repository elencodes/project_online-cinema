import {
	loadReviews,
	showReview,
} from './reviews.js';

loadReviews('reviewsDetective');
showReview('reviewsDetective');

document.addEventListener('DOMContentLoaded', function () {
	// Ищем элемент с классом .detective-info для вывода информации по фильму/сериалу
	const contentDetective = document.querySelector('.detective-info');

	function showDetectiveFilm() {
		//Создаём промис - методом fetch отправляем GET-запрос на указанный адрес
		fetch('data.json')
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
					if (item.name == 'Мой идеальный незнакомец') {
						const arrCastDetective = item.cast.split(',');

						contentDetective.innerHTML = `
							<div class="detective-info__container">
							<div class="description">
							<h1 class="description__title detective-title">МОЙ ИДЕАЛЬНЫЙ НЕЗНАКОМЕЦ</h1>
							<span class="description__year">${item.year}  1 сезон ${item.age}</span>
							<p class="description__genre">Южная Корея · Дорамы · ${item.genre} · Фэнтези</p>
							<div class="description__rating-and-actors detective-actors-and-rating">
								<div class="description__rating">
								<div> 
								<p class="description__rating--box ">${item.rating}</p>
								</div>
								<p class="description__rating-and-actors--text rating-text" >Pейтинг</p>
								</div>
								<div class="description__actors">
									<img  class="description__actors--icon" src="./assets/images/detective/actor-1.PNG" alt="Ким Дон-ук">
									<p class="description__rating-and-actors--text">${arrCastDetective[0]}</p>
								</div>
								<div class="description__actors">
									<img  class="description__actors--icon" src="./assets/images/detective/actor-2.PNG" alt="Чин Ги-джу">
									<p class="description__rating-and-actors--text" >${arrCastDetective[1]}</p>
								</div>
								<div class="description__actors">
									<img  class="description__actors--icon" src="./assets/images/detective/actor-3.PNG" alt="Со Джи-хе">
									<p class="description__rating-and-actors--text">${arrCastDetective[2]}</p>
								</div>
								<div class="description__actors actor-last">
									<img  class="description__actors--icon" src="./assets/images/detective/actor-4.PNG" alt="Пак Су-ён">
									<p class="description__rating-and-actors--text" >${arrCastDetective[3]}</p>
								</div>
						</div>
							<p class="description__text--1">Фантастическая дорама-детектив о путешествии в 1987 </p>
							<p class="description__text--2 detective-text">${item.info}
							</div>
						</div>
					</div>
				
					</div>`
					}
				})

			})
			//catch сработает, если запросы then НЕ выполнены успешно (например, отвалился интернет, нет данных на сервере и т.д.)
			.catch((error) => {
				//выводим на экран текст об ошибке (понятный для пользователя)
				contentDetective.textContent = `Сервер недоступен. Пожалуйста, попробуйте позже`
				//выводим в консоль код статуса ответа (код ошибки)
				console.log(error);
			})
			.finally(function () {
				//выводим в любом случае
				console.log('Были запрошены данные с сервера');
			});
	}

	showDetectiveFilm()
})