const pokemonName = document.querySelector(".pokemon_name")
const pokemonNumber = document.querySelector(".pokemon_number")
const pokemonImage = document.querySelector(".pokemon_img")
const form = document.querySelector(".form")
const inputSearch = document.querySelector(".input_search")
const btnPrev = document.querySelector(".btn_prev")
const btnNext = document.querySelector(".btn_next")

let searchedPokemon = 26;






const fetchPokemon = async (pokemon)=>{

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`.toLowerCase())

  

    if (APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }



    
}



const renderPokemon = async (pokemon) =>{


    pokemonName.innerHTML = "Loading"
    pokemonNumber.innerHTML = "";
    const data = await fetchPokemon(pokemon)

    if (data){

    pokemonImage.style.display = "block"
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    inputSearch.value = ""
    searchedPokemon = data.id
    }else{
        pokemonName.innerHTML = "Not Found :c";
        pokemonNumber.innerHTML ="";
        pokemonImage.style.display = "none"
    }
}


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    renderPokemon(inputSearch.value)
    
    
})





btnPrev.addEventListener('click',()=>{
    if (searchedPokemon > 1){
    searchedPokemon -= 1
    renderPokemon(searchedPokemon)
    }
    
})



btnNext.addEventListener('click',()=>{
    
    searchedPokemon += 1
    renderPokemon(searchedPokemon)
})






renderPokemon(searchedPokemon)







