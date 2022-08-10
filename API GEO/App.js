
document.querySelector("#cp").addEventListener('input', function(){
    // la ville sera afficher que si l'utilisateur tape 5 chiffres d'un code postal
    if(this.value.length == 5){
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}`;

        // on accede au API avec fetch et transforme les données en json 

        fetch(url).then(response => response.json().then(data => {console.log(data);

        let affichage = '<ul>';
        // une boucle au cas où plusieurs villes portent le meme code postal dans un array (ces villes seront affichées)
        for(let ville of data){
            // nom de la ville + population sur  une liste 
            affichage += `<li>${ville.nom}</li> ${ville.population} habitants`;
        }
        affichage += '</ul>';
        document.querySelector("#villes").innerHTML = affichage;

    }));
    } 
});

//https://geo.api.gouv.fr/communes?codePostal=$(this.value)%field=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre
//https://geo.api.gouv.fr/communes?nom=Versailles&fields=code,nom,centre,codesPostaux,population
//https://geo.api.gouv.fr/communes?codePostal=78000