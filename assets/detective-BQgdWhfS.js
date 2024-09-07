import"./style-K-ao8pVJ.js";import{l as a,s as n}from"./reviews-DneDnodl.js";a("reviewsDetective");n("reviewsDetective");document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".detective-info");function c(){fetch("../../data.json").then(t=>t.ok?t.json():Promise.reject(`Статус ошибки: ${t.status}`)).then(t=>{t.forEach(i=>{if(i.name=="Мой идеальный незнакомец"){const e=i.cast.split(",");s.innerHTML=`
							<div class="detective-info__container">
							<div class="description">
							<h1 class="description__title detective-title">МОЙ ИДЕАЛЬНЫЙ НЕЗНАКОМЕЦ</h1>
							<span class="description__year">${i.year}  1 сезон ${i.age}</span>
							<p class="description__genre">Южная Корея · Дорамы · ${i.genre} · Фэнтези</p>
							<div class="description__rating-and-actors detective-actors-and-rating">
								<div class="description__rating">
								<div> 
								<p class="description__rating--box ">${i.rating}</p>
								</div>
								<p class="description__rating-and-actors--text rating-text" >Pейтинг</p>
								</div>
								<div class="description__actors">
									<img  class="description__actors--icon" src="../../images/detective/actor-1.PNG" alt="Ким Дон-ук">
									<p class="description__rating-and-actors--text">${e[0]}</p>
								</div>
								<div class="description__actors">
									<img  class="description__actors--icon" src="../../images/detective/actor-2.PNG" alt="Чин Ги-джу">
									<p class="description__rating-and-actors--text" >${e[1]}</p>
								</div>
								<div class="description__actors">
									<img  class="description__actors--icon" src="../../images/detective/actor-3.PNG" alt="Со Джи-хе">
									<p class="description__rating-and-actors--text">${e[2]}</p>
								</div>
								<div class="description__actors actor-last">
									<img  class="description__actors--icon" src="../../images/detective/actor-4.PNG" alt="Пак Су-ён">
									<p class="description__rating-and-actors--text" >${e[3]}</p>
								</div>
						</div>
							<p class="description__text--1">Фантастическая дорама-детектив о путешествии в 1987 </p>
							<p class="description__text--2 detective-text">${i.info}
							</div>
						</div>
					</div>
				
					</div>`}})}).catch(t=>{s.textContent="Сервер недоступен. Пожалуйста, попробуйте позже",console.log(t)}).finally(function(){console.log("Были запрошены данные с сервера")})}c()});
