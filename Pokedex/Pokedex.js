// Show list of Pokemons
$(document).ready(function(){
    var output = "";
    for(let i = 1; i <= 200; i++){ // you can go up to 807 pokemons.
        output += "<img id='" + i + "' src=' https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png '>";
    }
    var list = document.getElementsByClassName("row")[0];
    list.getElementsByClassName("pokemons")[0].innerHTML = output;
    


    $('[id]').click(function() { //Get elements that have an id=.
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        
        let num = $(this).attr("id");
        $.get("https://pokeapi.co/api/v2/pokemon/" + num + "/", function(res) {
            console.log(res);
            var list = document.getElementsByClassName("row")[0];
            var dictionary = list.getElementsByClassName("dictionary")[0];
            
            // Name
            var name = capitalizeFirstLetter(res.name);
            dictionary.getElementsByClassName("name")[0].innerHTML = name;
            
            // Image
            var image = '<img id="36" width="250" src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + num + '.png ">';
            dictionary.getElementsByClassName("image")[0].innerHTML = image;
            
            // Types
            dictionary.getElementsByClassName("types")[0].innerHTML = "Types:";
            var typeElements = "";
            for(let i = 0; i < res.types.length; i++){            
                let type = capitalizeFirstLetter(res.types[i].type.name);
                typeElements += "<h6> - " + type + "</h6>";
            }
            dictionary.getElementsByClassName("typeElements")[0].innerHTML = typeElements;
            
            // Height
            dictionary.getElementsByClassName("height")[0].innerHTML = "Height:";
            dictionary.getElementsByClassName("heightNumber")[0].innerHTML = "<h6> - " + res.height + "</h6>";
            
            // Weight
            dictionary.getElementsByClassName("weight")[0].innerHTML = "Weight:";
            dictionary.getElementsByClassName("weightnumber")[0].innerHTML = "<h6> - " + res.weight + "</h6>";

            // Abilities
            dictionary.getElementsByClassName("abilities")[0].innerHTML = "Abilities:";
            var abilityElements = "";
            for(let i = 0; i < res.abilities.length; i++){            
                let ability = capitalizeFirstLetter(res.abilities[i].ability.name);
                abilityElements += "<h6> - " + ability + "</h6>";
            }
            dictionary.getElementsByClassName("ability")[0].innerHTML = abilityElements;
            
            // Stats
            dictionary.getElementsByClassName("stats")[0].innerHTML = "Statistics:";
            var statElements = "";
            for(let i = 0; i < res.stats.length; i++){            
                let stat = capitalizeFirstLetter(res.stats[i].stat.name);
                statElements += "<h6> - " + stat + "</h6>";
            }
            dictionary.getElementsByClassName("stat")[0].innerHTML = statElements;

            // Moves
            dictionary.getElementsByClassName("moves")[0].innerHTML = "Moves:";
            var moveElements = "";
            for(let i = 0; i < res.moves.length; i++){
                let move = capitalizeFirstLetter(res.moves[i].move.name);
                moveElements += "<h6> - " + move + "</h6>";
            }
            dictionary.getElementsByClassName("move")[0].innerHTML = moveElements;
        }, "json");
    });

});