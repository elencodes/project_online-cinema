import"./style-K-ao8pVJ.js";import{l as d,s as v}from"./reviews-DneDnodl.js";d("reviewsComedy");v("reviewsComedy");const u="../../data.json",g=document.querySelector("#movieTitle"),y=document.querySelector("#movieYear"),p=document.querySelector("#movieAge"),f=document.querySelector("#movieGenre"),C=document.querySelector("#movieRating"),h=document.querySelector("#movieActors"),s=document.querySelector("#movieDescription"),q=document.querySelector("#movieDirector"),a=document.querySelector(".comedy-info");async function L(){try{const o=await fetch(u);if(!o.ok)throw new Error(`Статус ошибки: ${o.status}`);const e=(await o.json()).find(r=>r.name==="Иллюзия обмана 2");if(e){g.textContent=e.name,y.textContent=e.year,p.textContent=e.age,f.textContent=e.genre,C.textContent=e.rating,q.textContent=e.director,e.cast.slice(0,4).forEach(t=>{const n=document.createElement("div");n.className="rating-cast__box--style remove__item",n.innerHTML=`
					<div class="cast__item">
						<img src="${t.photo}" alt="${t.name}">
					</div>
					<p class="text">${t.name}</p>
					`,h.appendChild(n)});const c=e.info,m=c.slice(0,195)+(c.length>195?"...":""),i=t=>{s.classList.toggle("description-expanded",t),s.innerHTML=`
						${t?c:m}
						<a href="#" id="toggleDescriptionLink">
								${t?"Свернуть описание":"Все детали о фильме"}
						</a>
					`,document.querySelector("#toggleDescriptionLink").addEventListener("click",l=>{l.preventDefault(),i(!t)})};i(!1)}else a.textContent="Фильм не найден"}catch(o){console.error("Ошибка при загрузке данных:",o),a.textContent="Ошибка при загрузке данных. Пожалуйста, попробуйте позже."}finally{console.log("Загрузка данных завершена.")}}L();
