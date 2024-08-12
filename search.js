//реализация вывода фильмов чере поис
const postBtn = document.getElementById('formBtn');
paragraph = document.getElementById('result');

postBtn.onclick = async function(e){
       e.preventDefault();
       let input = document.getElementById('inputID').value;
       let error = new Error('фильм остсутвует в нашей библиотеке');
	   try{
		fetch("data.json")
	.then((response) => {if (!response.ok) {
		throw new Error('нет такого фильма');
	  }
	  return response.json();})
	.then((jsonData) =>{
	  const container = document.getElementById("movieInfoID");
	  const input = document.getElementById("inputID").value;
		jsonData.map((movie) => {
		  if(movie.name.toLowerCase() == input.toLowerCase()){
		  const movieCard = document.createElement("div");
		  movieCard.className = "movieCard";
		  movieCard.textContent = `Рэйтинг ${movie.rating}`;
		  container.append(movieCard);
		  const movieName = document.createElement("h3");
		  movieName.textContent = `Название: ${movie.name}`;
		  movieCard.appendChild(movieName);
		  const movieGenre = document.createElement("h3");
		  movieGenre.textContent = `Жанр: ${movie.genre}`;
		  movieCard.appendChild(movieGenre);
		  const movieDirector = document.createElement("h3");
		  movieDirector.textContent = `Режисер: ${movie.director}`;
		  movieCard.appendChild(movieDirector);
		  const movieCover = document.createElement("img");
		  movieCover.src = movie.url;
		  movieCover.className = "img--serach";
		  movieCard.append(movieCover);
		  const movieCast = document.createElement("h3");
		  movieCast.textContent = `Актеры: ${movie.cast}`;
		  movieCard.appendChild(movieCast);
		  const movieInfo = document.createElement("p");
		  movieInfo.textContent = `${movie.info}`;
		  movieCard.appendChild(movieInfo);
          input.value="";
		} /*else if(input.toLowerCase() !== movie.name.toLowerCase()){
			const error = document.createElement("div");
			error.className = "error";
			error.textContent = "Нет фильма";
			container.append(error);
		};**/
		})
	})
	input.value="";
    
}  catch(error){error.message}}
