document.addEventListener("DOMContentLoaded", function () {
	function showThrillerFilm() {
		fetch("data.json")
			.then((response) => response.json())
			.then((jsonData) => {
				// Ищем элемент с классом .thriller-info
				const contentThriller = document.querySelector('.thriller-info');
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
	}

	showThrillerFilm()
})