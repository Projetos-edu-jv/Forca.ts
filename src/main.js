var displayLetras = document.querySelector('.letras');
var displayDica = document.querySelector('.dica');
var displayPalavra = document.querySelector('.palavra');
var palavras = ["Casa", "Carro", "Banana", "Bunda"];
var renderLetras = [];
var letras = [
    "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r",
    "s", "u", "v", "w", "x", "y", "z"
];
var dica = [
    'Onde vc mora',
    'Oq capota e voa!',
    'Fruta que tem duplo sentido!',
    'onde vc n erra o buraco!'
];
var reg = /["_"]/gi;
var escolheDica = Math.floor(Math.random() * dica.length);
var palavra = palavras[escolheDica];
var mascara = palavra.replace(/[a-z]/gi, '_ ');
var errosPermitidos = 6;
letras.map(function (letra) { renderLetras.push("<button onclick=\"Verifica('".concat(letra, "')\">").concat(letra, "</button>")); });
displayLetras.innerHTML = renderLetras.join('');
displayDica.innerHTML = "<p>".concat(dica[escolheDica], "</p>");
displayPalavra.innerHTML = mascara;
var Verifica = function (letra) {
    var seguro = [];
    var palavraMinusculo = palavra.toLowerCase();
    for (var index = 0; index <= palavra.length; index++) {
        if (palavraMinusculo[index] == letra) {
            mascara = mascara.split(' ');
            mascara[index] = letra;
            mascara = mascara.join(' ');
            seguro.push(letra);
        }
        ;
    }
    ;
    (seguro.length < 1) ? Renderiza(false) : Renderiza(true);
};
var Renderiza = function (hit) {
    var res = mascara.match(reg);
    switch (hit) {
        case true:
            displayPalavra.innerHTML = mascara;
            break;
        case false:
            errosPermitidos--;
            render_boy("".concat(errosPermitidos));
            break;
    }
    ;
    if (errosPermitidos < 1) {
        EndGame(false);
    }
    else if (!(res instanceof Array)) //Verifica se o res ainda é um Array
     {
        EndGame(true);
    }
    ;
};
var render_boy = function (id) {
    var render = document.querySelector("#_".concat(id));
    render.classList.remove('off');
};
var EndGame = function (status) {
    (status) ? alert("Você Venceu!") : alert("Você Perdeu!");
    window.location.reload();
};
