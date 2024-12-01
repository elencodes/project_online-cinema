import"./style-K-ao8pVJ.js";import{l as m,s as d}from"./reviews-DneDnodl.js";m("reviewsHorror");d("reviewsHorror");const v="../../data.json",u=document.querySelector("#movieTitle"),g=document.querySelector("#movieYear"),p=document.querySelector("#movieAge"),y=document.querySelector("#movieGenre"),f=document.querySelector("#movieRating"),h=document.querySelector("#movieActors"),s=document.querySelector("#movieDescription"),q=document.querySelector("#movieDirector"),L=document.querySelector(".horror-info");async function S(){try{const e=(await(await fetch(v)).json()).find(c=>c.name==="Солнцестояние");if(e){u.textContent=e.name,g.textContent=e.year,p.textContent=e.age,y.textContent=e.genre,f.textContent=e.rating,q.textContent=e.director,e.cast.slice(0,4).forEach(t=>{const o=document.createElement("div");o.className="rating-cast__box--style remove__item",o.innerHTML=`
                <div class="cast__item">
                    <img src="${t.photo}" alt="${t.name}">
                </div>
                <p class="text">${t.name}</p>
                `,h.appendChild(o)});const n=e.info,a=n.slice(0,195)+(n.length>195?"...":""),i=t=>{s.classList.toggle("description-expanded",t),s.innerHTML=`
                    ${t?n:a}
                    <a href="#" id="toggleDescriptionLink">
                        ${t?"Свернуть описание":"Все детали о фильме"}
                    </a>
                `,document.querySelector("#toggleDescriptionLink").addEventListener("click",l=>{l.preventDefault(),i(!t)})};i(!1)}else console.error("Фильм не найден")}catch(r){console.error("Ошибка при загрузке данных:",r),L.textContent="Ошибка при загрузке данных. Пожалуйста, попробуйте позже."}finally{console.log("Загрузка данных завершена.")}}S();
