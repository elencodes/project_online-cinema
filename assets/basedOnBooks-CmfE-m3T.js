import"./style-K-ao8pVJ.js";import{l as n,s as c}from"./reviews-DneDnodl.js";n("reviewsBasedOnBooks");c("reviewsBasedOnBooks");document.addEventListener("DOMContentLoaded",function(){const a=document.querySelector(".basedOnBooks-info");function i(){fetch("../../data.json").then(s=>s.ok?s.json():Promise.reject(`Статус ошибки: ${s.status}`)).then(s=>{s.forEach(t=>{if(t.name=="Мастер и Маргарита"){const o=t.cast.split(",");a.innerHTML=`
							<div class="basedOnBooks-info__container">
							<div class="description">
							<h1 class="description__title basedOnBooks--title">МАСТЕР И МАРГАРИТА</h1>
							<span class="description__year">${t.year}  1 сезон ${t.age}</span>
							<p class="description__genre">Россия · Драмы · Фэнтези · Мелодрамы</p>
							<div class="description__rating-and-actors basedOnBooks-actors-and-rating">
								<div class="description__rating">
								<div> 
								<p class="description__rating--box ">${t.rating}</p>
								</div>
								<p class="description__rating-and-actors--text rating-text" >Pейтинг</p>
								</div>
								<div class="description__actors">
									<img  class="description__actors--icon" src="../../images/basedOnBooks/actor-1.PNG" alt="Аугуст Диль">
									<p class="description__rating-and-actors--text">${o[0]}</p>
								</div>
								<div class="description__actors">
									<img  class="description__actors--icon" src="../../images/basedOnBooks/actor-2.PNG" alt="Евгений Цыганов">
									<p class="description__rating-and-actors--text" >${o[1]}</p>
								</div>
								<div class="description__actors">
									<img  class="description__actors--icon" src="../../images/basedOnBooks/actor-3.PNG" alt="Юлия Снигирь">
									<p class="description__rating-and-actors--text">${o[2]}</p>
								</div>
								<div class="description__actors actor-last">
									<img  class="description__actors--icon" src="../../images/basedOnBooks/actor-4.PNG" alt="Алексей Гуськов">
									<p class="description__rating-and-actors--text" >${o[3]}</p>
								</div>
						</div>
							
							<p class="description__text--2 basedOnBooks-text">${t.info}
							</div>
						</div>
					</div>
				
					</div>`}})}).catch(s=>{a.textContent="Сервер недоступен. Пожалуйста, попробуйте позже",console.log(s)}).finally(function(){console.log("Были запрошены данные с сервера")})}i()});
