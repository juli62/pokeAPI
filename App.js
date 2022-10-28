/**
        * Requisitos:
            * 1. Consultar API y guardar en el Local Storage => DONE
            * 2. Necesito:  Nombre, Imagen, Stats basicos.=> WORKING ON
            * 3. Link pagina movimientos / Link Home
            * 4. Link pagina Habilidades / Link Home

        
*/

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'
const pokemonSpeciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/'  
const pokemonData = {}
const pokemonSpecies = {}

const fetchPokemon = (url, pokemon) => {
    fetch(url + pokemon)
    .then(data => data.json())
    .then(pokemon => {
        localStorage.setItem("pokemonData", JSON.stringify(pokemon))
       pokemonPageOne()
    })
}

const fetchSpecies = (url, pokemon) => {
    fetch(url + pokemon)
    .then(data => data.json())
    .then(pokemon => {
        localStorage.setItem("pokemonSpecies", JSON.stringify(pokemon))
        pokemonPageOne()
    })
}

const getPokemonData = () => JSON.parse(localStorage.getItem("pokemonData"))
const getPokemonSpecies = () => JSON.parse(localStorage.getItem("pokemonSpecies"))

const pokemonPageOne = () => {
    
    const pokemon = getPokemonData("pokemonData")
    const species = getPokemonSpecies("pokemonSpecies")
    

    document.getElementById("pokemonSprite").src = pokemon.sprites.front_default
    document.getElementById("title").innerHTML = pokemon.name
    document.getElementById("description").innerHTML = species.flavor_text_entries[6].flavor_text.replace("" , " ")
   
    //Stats
    for (i = 0; i <= 3; i++){
        document.getElementById(`stat${i+1}`).innerHTML = pokemon.stats[i].stat.name
        document.getElementById(`stat${i+1}`).innerHTML += ": "
        document.getElementById(`stat${i+1}`).innerHTML += pokemon.stats[i].base_stat
    }
   

}


const pokemonPageTwo = () => {

    const pokemon = getPokemonData("pokemonData")
     
    //Moves
    for (i = 0; i <= 3; i++){
        document.getElementById(`stat${i+1}`).innerHTML = pokemon.moves[i].move.name
       
    }
     
    
    

}

const pokemonPageThree = () => {

    const pokemon = getPokemonData("pokemonData")
   
    //Abilities
    for (i = 0; i <= 3; i++){
        document.getElementById(`stat${i+1}`).innerHTML = pokemon.abilities[i].ability.name
        if (pokemon.abilities[i].ability.name == undefined){
            document.getElementById(`stat${i+1}`).innerHTML = ""
        }
    }
     
   
   
    



}

document.getElementById("search").addEventListener("keydown", function(event) {
        if (event.key === "Enter"){
            fetchPokemon(pokemonUrl , document.getElementById("search").value.toLowerCase()) 
            fetchSpecies(pokemonSpeciesUrl ,document.getElementById("search").value.toLowerCase() )
            
            document.getElementById("card").style.animation = "fade-in 2.5s"
            document.getElementById("card").style.visibility = "visible"
        }
})




document.getElementById("home").addEventListener("click", function() {

        pokemonPageOne()
})


document.getElementById("moves").addEventListener("click", function() {

    pokemonPageTwo()
})


document.getElementById("abilities").addEventListener("click", function() {

    pokemonPageThree()
})