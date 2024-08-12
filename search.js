const postBtn = document.getElementById('formBtn');
let p = document.getElementById('movie--nameID');
let err = document.getElementById('errorSerachId');

postBtn.onclick = async function(e){
       e.preventDefault();
       let input = document.getElementById('movie--inputID').value;
       let error = new Error('фильм остсутвует в нашей библиотеке');
	   fetch("data.json")
	   .then((response) => response.json())
	   .then((jsonData) =>{
		jsonData.map((movie) =>{
			if(movie.name.toLowerCase() === input.toLowerCase()){
				p.innerHTML=movie.name;
				console.log("qwe "+input);
				console.log("qwe " +movie.name.toLowerCase());
				err.innerHTML="пууууусто"
			}else{
				err.innerHTML=error;
			};
		})
	   });
	  // input="";
}