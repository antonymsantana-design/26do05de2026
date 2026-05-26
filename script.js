async function filme() {
    try{
    const nome = document.getElementById("mn").value;
    const filme = await fetch(`https://www.omdbapi.com/?t=${nome}&apikey=ddddb8dd`)
    const dados = await filme.json();
    document.getElementById("foto").innerHTML = `<h2>${dados.Title}</h2> <br> <h3>${dados.Year}</h3> <br> <p>${dados.Plot}</p> <br> <p>${dados.Genre}</p> <br> <p>${dados.Director}</p> <br> <p>${dados.Actors}</p>` 
    
    }catch(erro){
        console.log(erro)
    }
   
}
