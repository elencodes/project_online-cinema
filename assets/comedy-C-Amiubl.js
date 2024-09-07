import"./style-K-ao8pVJ.js";import{l,s as d}from"./reviews-DneDnodl.js";l("reviewsComedy");d("reviewsComedy");const v="../../data.json",u=document.querySelector("#movieTitle"),g=document.querySelector("#movieYear"),p=document.querySelector("#movieAge"),y=document.querySelector("#movieGenre"),f=document.querySelector("#movieRating"),L=document.querySelector("#movieActors"),s=document.querySelector("#movieDescription"),h=document.querySelector("#movieDirector");async function q(){try{const e=(await(await fetch(v)).json()).find(r=>r.name==="Иллюзия обмана 2");if(e){u.textContent=e.name,g.textContent=e.year,p.textContent=e.age,y.textContent=e.genre,f.textContent=e.rating,h.textContent=e.director,e.cast.slice(0,4).forEach(t=>{const o=document.createElement("div");o.className="rating-cast__box--style remove__item",o.innerHTML=`
					<div class="cast__item">
						<img src="${t.photo}" alt="${t.name}">
					</div>
					<p class="text">${t.name}</p>
					`,L.appendChild(o)});const n=e.info,a=n.slice(0,195)+(n.length>195?"...":""),i=t=>{s.classList.toggle("description-expanded",t),s.innerHTML=`
						${t?n:a}
						<a href="#" id="toggleDescriptionLink">
								${t?"Свернуть описание":"Все детали о фильме"}
						</a>
					`,document.querySelector("#toggleDescriptionLink").addEventListener("click",m=>{m.preventDefault(),i(!t)})};i(!1)}else console.error("Фильм не найден")}catch(c){console.error("Ошибка при загрузке данных:",c)}}q();
