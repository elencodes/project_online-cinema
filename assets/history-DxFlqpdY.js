import"./style-K-ao8pVJ.js";import{l as e,s as l}from"./reviews-DneDnodl.js";e("reviewsHistory");l("reviewsHistory");document.addEventListener("DOMContentLoaded",function(){const a=document.querySelector(".history-info");function o(){fetch("../../data.json").then(s=>s.ok?s.json():Promise.reject(`Статус ошибки: ${s.status}`)).then(s=>{s.forEach(i=>{if(i.name=="Чемпион мира"){const t=i.cast.split(",");a.innerHTML=`
							<div class="history-info__image">
								<img src="../../images/history_films/world-champion_title.png"></img>
							</div>
							<div class="history-info__item">
								<p class="history-film--info text--style">${i.year}</p>
								<p class="history-film--info age__item">${i.age}</p>
							</div>
							<p class="history-film--info text--style">${i.genre}</p>
							<div class="rating-cast__box">
								<div class="rating-cast__box--style">
									<div class="rating--style">
										<p class="rating-info rating">${i.rating}</p>
									</div>
									<p class="text">Рейтинг</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="../../images/history_films/habenskiy.png" alt="Константин Хабенский">
									</div>
									<p class="text">${t[0]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="../../images/history_films/yankovskiy.png" alt="Иван Янковский">
									</div>
									<p class="text">${t[1]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="../../images/history_films/vdovichenkov.png" alt="Владимир Вдовиченков">
									</div>
									<p class="text">${t[2]}</p>
								</div>
								<div class="rating-cast__box--style">
									<div class="cast__item">
										<img src="../../images/history_films/dobronravov.png" alt="Виктор Добронравов">
									</div>
									<p class="text">${t[3]}</p>
								</div>
							</div>
							<p class="history-film--info">${i.info}</p>
							`}})}).catch(s=>{a.textContent="Сервер недоступен. Пожалуйста, попробуйте позже",console.log(s)}).finally(function(){console.log("Были запрошены данные с сервера")})}o()});
