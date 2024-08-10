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
})