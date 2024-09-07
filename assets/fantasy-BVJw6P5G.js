import"./style-K-ao8pVJ.js";import{l as e,s as l}from"./reviews-DneDnodl.js";e("reviewsFantasy");l("reviewsFantasy");document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector(".fantasy-info");function n(){fetch("../../data.json").then(s=>s.ok?s.json():Promise.reject(`Статус ошибки: ${s.status}`)).then(s=>{s.forEach(a=>{if(a.name=="Дом Дракона"){const t=a.cast.split(",");i.innerHTML=`
							<div class="fantasy-info__image">
								<img src="../../images/fantasy_films/title.png"></img>
							</div>
							<div class="fantasy-info__item">
								<p class="fantasy-film--info text--style">${a.year}</p>
								<p class="fantasy-film--info age__item">${a.age}</p>
							</div>
							<p class="fantasy-film--info text--style">${a.genre}</p>
							<div class="rating-cast__box">
								<div class="rating-cast__box--style">
									<div class="rating--style">
										<p class="rating-info rating">${a.rating}</p>
									</div>
									<p class="text">Рейтинг</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="../../images/fantasy_films/emma.jpg" alt="Эмма Д'Арси">
									</div>
									<p class="text">${t[0]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="../../images/fantasy_films/olivia.jpg" alt="Оливия Кук">
									</div>
									<p class="text">${t[1]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="../../images/fantasy_films/matt.jpg" alt="Мэтт Смит">
									</div>
									<p class="text">${t[2]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="../../images/fantasy_films/ris.jpg" alt="Рис Иванс">
									</div>
									<p class="text">${t[3]}</p>
								</div>
							</div>
							<p class="fantasy-film--info">${a.info}</p>
							`}})}).catch(s=>{i.textContent="Сервер недоступен. Пожалуйста, попробуйте позже",console.log(s)}).finally(function(){console.log("Были запрошены данные с сервера")})}n()});
