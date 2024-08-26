import {
	loadReviews,
	showReview,
} from './reviews.js';

loadReviews('reviewsBasedOnBooks');
showReview('reviewsBasedOnBooks');

document.addEventListener('DOMContentLoaded', function () {
	// Ищем элемент с классом .basedOnBooks-info для вывода информации по фильму/сериалу
	const contentBasedOnBooks = document.querySelector('.basedOnBooks-info');

	function showBasedOnBooksFilm() {
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
					if (item.name == 'Мастер и Маргарита') {
						const arrCastBasedOnBooks = item.cast.split(',');

						contentBasedOnBooks.innerHTML = `
							<div class="basedOnBooks-info__container">
							<div class="description">
							<h1 class="description__title basedOnBooks--title">МАСТЕР И МАРГАРИТА</h1>
							<span class="description__year">${item.year}  1 сезон ${item.age}</span>
							<p class="description__genre">Россия · Драмы · Фэнтези · Мелодрамы</p>
							<div class="description__rating-and-actors basedOnBooks-actors-and-rating">
								<div class="description__rating">
								<div> 
								<p class="description__rating--box ">${item.rating}</p>
								</div>
								<p class="description__rating-and-actors--text rating-text" >Pейтинг</p>
								</div>
								<div class="description__actors">
									<img  class="description__actors--icon" src="./assets/images/basedOnBooks/actor-1.PNG" alt="Аугуст Диль">
									<p class="description__rating-and-actors--text">${arrCastBasedOnBooks[0]}</p>
								</div>
								<div class="description__actors">
									<img  class="description__actors--icon" src="./assets/images/basedOnBooks/actor-2.PNG" alt="Евгений Цыганов">
									<p class="description__rating-and-actors--text" >${arrCastBasedOnBooks[1]}</p>
								</div>
								<div class="description__actors">
									<img  class="description__actors--icon" src="./assets/images/basedOnBooks/actor-3.PNG" alt="Юлия Снигирь">
									<p class="description__rating-and-actors--text">${arrCastBasedOnBooks[2]}</p>
								</div>
								<div class="description__actors actor-last">
									<img  class="description__actors--icon" src="./assets/images/basedOnBooks/actor-4.PNG" alt="Алексей Гуськов">
									<p class="description__rating-and-actors--text" >${arrCastBasedOnBooks[3]}</p>
								</div>
						</div>
							
							<p class="description__text--2 basedOnBooks-text">${item.info}
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
				contentBasedOnBooks.textContent = `Сервер недоступен. Пожалуйста, попробуйте позже`
				//выводим в консоль код статуса ответа (код ошибки)
				console.log(error);
			})
			.finally(function () {
				//выводим в любом случае
				console.log('Были запрошены данные с сервера');
			});
	}

	showBasedOnBooksFilm()
})