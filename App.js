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
        console.log("Fetching Pokemon!")
        localStorage.setItem("pokemonData", JSON.stringify(pokemon))
       pokemonPageOne()
    })
}

const fetchSpecies = (url, pokemon) => {
    fetch(url + pokemon)
    .then(data => data.json())
    .then(pokemon => {
        console.log("Fetching Species!")
        localStorage.setItem("pokemonSpecies", JSON.stringify(pokemon))
        pokemonPageOne()
    })
}

const getPokemonData = () => JSON.parse(localStorage.getItem("pokemonData"))
const getPokemonSpecies = () => JSON.parse(localStorage.getItem("pokemonSpecies"))

const pokemonPageOne = () => {
    
    const pokemon = getPokemonData("pokemonData")
    const species = getPokemonSpecies("pokemonSpecies")
    console.log(species, pokemon)

    document.getElementById("pokemonSprite").src = pokemon.sprites.front_default
    document.getElementById("title").innerHTML = pokemon.name
    document.getElementById("description").innerHTML = species.flavor_text_entries[6].flavor_text.replace("" , " ")
   
   //Stat 1
    document.getElementById("stat1").innerHTML = pokemon.stats[0].stat.name
    document.getElementById("stat1").innerHTML += ": "
    document.getElementById("stat1").innerHTML += pokemon.stats[0].base_stat
   
   //Stat 2
    document.getElementById("stat2").innerHTML = pokemon.stats[1].stat.name
    document.getElementById("stat2").innerHTML += ": "
    document.getElementById("stat2").innerHTML += pokemon.stats[1].base_stat
    
    //Stat 3
    document.getElementById("stat3").innerHTML = pokemon.stats[2].stat.name
    document.getElementById("stat3").innerHTML += ": "
    document.getElementById("stat3").innerHTML += pokemon.stats[2].base_stat


}


const pokemonPageTwo = () => {

    const pokemon = getPokemonData("pokemonData")
    const species = getPokemonSpecies("pokemonSpecies")
    
     //Move 1
     document.getElementById("stat1").innerHTML = pokemon.moves[0].move.name

    //Move 2
     document.getElementById("stat2").innerHTML = pokemon.moves[1].move.name

     
     //Move 3
     document.getElementById("stat3").innerHTML = pokemon.moves[2].move.name
    

}

const pokemonPageThree = () => {

    const pokemon = getPokemonData("pokemonData")
    const species = getPokemonSpecies("pokemonSpecies")
    
     //Ability 1
     document.getElementById("stat1").innerHTML = pokemon.abilities[0].ability.name
   
    //Ability 2
     document.getElementById("stat2").innerHTML = pokemon.abilities[1].ability.name
   
     
     //Ability 3
     document.getElementById("stat3").innerHTML = pokemon.abilities[2].ability.name
    



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