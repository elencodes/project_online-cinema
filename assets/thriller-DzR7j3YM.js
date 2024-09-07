import"./style-K-ao8pVJ.js";import{l as r,s as a}from"./reviews-DneDnodl.js";r("reviewsThriller");a("reviewsThriller");document.addEventListener("DOMContentLoaded",function(){const l=document.querySelector(".thriller-info");function e(){fetch("../../data.json").then(i=>i.ok?i.json():Promise.reject(`Статус ошибки: ${i.status}`)).then(i=>{i.forEach(s=>{if(s.name=="Исчезнувшая"){const t=s.cast.split(",");l.innerHTML=`
							<div class="thriller-info__image thriller-title__image">
								<img src="../../images/thrillers/title.png"></img>
							</div>
							<div class="thriller-info__item">
								<p class="thriller-film--info text--style">${s.year}</p>
								<p class="thriller-film--info age__item">${s.age}</p>
							</div>
							<p class="thriller-film--info text--style">${s.genre}</p>
							<div class="rating-cast__box">
								<div class="rating-cast__box--style">
									<div class="rating--style">
										<p class="rating-info rating">${s.rating}</p>
									</div>
									<p class="text">Рейтинг</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="../../images/thrillers/ben-affleck.jpg" alt="Бен Аффлек">
									</div>
									<p class="text">${t[0]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="../../images/thrillers/rosamund-pike.jpg" alt="Роза Пайк">
									</div>
									<p class="text">${t[1]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="../../images/thrillers/neil-patrick-harris.jpg" alt="Нил Патрик">
									</div>
									<p class="text">${t[2]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="../../images/thrillers/tyler-perry.jpg" alt="Тайлер Перри">
									</div>
									<p class="text">${t[3]}</p>
								</div>
							</div>
							<p class="thriller-film--info thriller-info--style">${s.info}</p>
					`}})}).catch(i=>{l.textContent="Сервер недоступен. Пожалуйста, попробуйте позже",console.log(i)}).finally(function(){console.log("Были запрошены данные с сервера")})}e()});
