var fs = require('fs');

const replace = (text, word, index) => {
    
    let arr = text.split(""); // aqui o texto é transformado em array.
    arr.splice(index-1, 8, word); // aqui é alterado o valor da posição index-1 + 8 caracteres (squirtle) em word que pode ser (wartortle ou blastoise).
    text = arr.join(""); // aqui ele transforma o array em string novamente.
    return text; // retorno o novo texto modificado.
}

const newFile = (file, text) => {
    fs.writeFileSync(file, text, {enconding:'utf-8',flag: 'w'});
}

const evolutionPokemon = (path) => {
    var text = fs.readFileSync(path, "utf-8");
    var index = text.indexOf("quirtle");
    var e = 0;

    while (index != -1) {

        if (e == 0) e = 1;

        else if (e == 1) {
            text = text.substr(index-1, 1).indexOf("S") == 0 ? replace(text, "Wartortle", index) : replace(text, "wartortle", index);
            e = 2;
        
        } else {
            text = text.substr(index-1, 1).indexOf("S") == 0 ? replace(text, "Blastoise", index) : replace(text, "blastoise", index);
            e = 0;
        }

        index = text.indexOf("quirtle", index + 1);
    }

    newFile("pokemonEvoluido.txt", text);

}

evolutionPokemon("pokemon.txt");
