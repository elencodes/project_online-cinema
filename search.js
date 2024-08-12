let jsonData = [];

async function loadJSON() {
	const response = await fetch('data.json');
	jsonData = await response.json();
}

// Функция для поиска
function search(query) {
	const results = jsonData.filter(item => 
		item.name.toLowerCase().includes(query.toLowerCase()) 
	);
	displayResults(results);
}

// Вывод результатов на экран
function displayResults(results) {
	const resultsDiv = document.getElementById('results');
	resultsDiv.innerHTML = ''; 

	if (results.length === 0) {
		resultsDiv.innerHTML = '<p>Фильм отсутсвует в нашей библиотеке</p>';
		return;
	}

	results.forEach(item => {
		const nameFilm = document.createElement('h2');
		nameFilm.textContent = item.name; 
		resultsDiv.appendChild(nameFilm);
		//добавляем ссылку на страницу дом дракона
		if(item.name=="Дом Дракона"){
			const imageUrl = item.url;
			const linkUrl = "dom-drakona.html";
			const link = document.createElement('a');
			link.href = linkUrl;
			const filmPoster  = document.createElement('img');
			filmPoster.className = "img--serach";
			filmPoster.src = imageUrl;
			link.appendChild(filmPoster );
			resultsDiv.appendChild(link);
		}else{		
		const filmPoster = document.createElement('img');
		filmPoster.src =  item.url; 
		filmPoster.className = "img--serach";
		resultsDiv.appendChild(filmPoster);};
		const rating = document.createElement('h3');
		rating.textContent = "Рэйтинг: "+item.rating; 
		resultsDiv.appendChild(rating);
		const year = document.createElement('h3');
		year.textContent = "Год: "+item.year; 
		resultsDiv.appendChild(year);
		const filmGenre = document.createElement('h3');
		filmGenre.textContent = "Жанр: "+ item.genre; 
		resultsDiv.appendChild(filmGenre);
		const filmDirector = document.createElement('h3');
		filmDirector.textContent = "Режисер: "+ item.director; 
		resultsDiv.appendChild(filmDirector);
		const filmCast = document.createElement('h3');
		filmCast.textContent = "Актеры: "+ item.cast; 
		resultsDiv.appendChild(filmCast);
		const filmInfo = document.createElement('p');
		filmInfo.textContent =  item.info; 
		resultsDiv.appendChild(filmInfo);

	});
}

// Обработчик событий для кнопки поиска
document.getElementById('searchButton').addEventListener('click', () => {
	const query = document.getElementById('search').value;
	search(query);
	document.getElementById('search').value = '';
});

// Загружаем данные при загрузке страницы
loadJSON();
