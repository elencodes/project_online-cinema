//реализация вывода фильмов чере поис
function fetchMovieSerach(){
	fetch("data.json")
	.then((response) => response.json())
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
          input="";
		} else if(input!=="" && input!==movie.name){
		  let result=document.getElementById('errorSerachId');
		  result.innerHTML = 'К сожалению данный фильм отсутсвует в нашей библиотеке.'
		}
		})
	})
  }
  
  fetchMovieSerach()
