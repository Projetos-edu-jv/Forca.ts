var Game = /** @class */ (function () {
    //Inicializa variavéis críticas para o jogo
    function Game() {
        Game.letrasHtml = document.querySelector('.letras');
        Game.palavrasHtml = document.querySelector('.palavra');
        Game.mostraDicaHtml = document.querySelector('.dica');
        Game.palavra;
        Game.palavraMascarada;
        Game.errosPermitidos;
    }
    ;
    //Aloca recursos para o jogo
    Game.prototype.Init = function () {
        //Palavras 
        var Array_palavras = ["Casa", "Carro", "Banana", "Bunda"];
        //Dica
        var dica = [
            'Onde vc mora',
            'Oq capota e voa!',
            'Fruta que tem duplo sentido!',
            'onde vc n erra o buraco!'
        ];
        //Letras
        var letras = [
            "a", "b", "c", "d", "e", "f",
            "g", "h", "i", "j", "k", "l",
            "m", "n", "o", "p", "q", "r",
            "s", "u", "v", "w", "x", "y", "z"
        ];
        //Escolha das dicas
        var escolheDica = Math.floor(Math.random() * dica.length);
        Game.palavra = Array_palavras[escolheDica]; //Palavra sorteada
        Game.palavraMascarada = Game.palavra.replace(/[a-z]/gi, '_'); //Mascara
        Game.errosPermitidos = 6; //Erros aceitos
        //Chama a lógica do jogo
        Game.Engine(false, NaN, dica, letras, escolheDica);
    };
    ;
    //Responsável pela lógica mais "pesada" do jogo
    Game.Engine = function (jogoIniciado, hit, dica, letras, escolheDica) {
        if (!jogoIniciado) {
            var letrasRendenizadas_1 = [];
            letras.map(function (letra) {
                return letrasRendenizadas_1.push("<button onclick=\"Game.Verificador('".concat(letra, "')\" >").concat(letra, "</button>"));
            });
            Game.letrasHtml.innerHTML = letrasRendenizadas_1.join('');
            Game.palavrasHtml.innerText = Game.palavraMascarada;
            Game.mostraDicaHtml.innerHTML = "<p>".concat(dica[escolheDica], "</p>");
        }
        else if (!hit) {
            Game.palavrasHtml.innerHTML = Game.palavraMascarada;
        }
        else {
            Game.errosPermitidos -= hit;
            console.log(Game.errosPermitidos);
        }
        ;
        if (Game.errosPermitidos < 1)
            Game.EndGame(false);
        if (jogoIniciado) {
            var reg = /["_"]/gi;
            if (!reg.test(Game.palavraMascarada))
                Game.EndGame(true);
        }
        ;
    };
    ;
    Game.Verificador = function (letra) {
        var seguro = [];
        var palavraMinusculo = Game.palavra.toLowerCase();
        for (var index = 0; index <= Game.palavra.length; index++) {
            if (palavraMinusculo[index] == letra) {
                this.palavraMascarada = this.palavraMascarada.split('');
                this.palavraMascarada[index] = letra;
                this.palavraMascarada = this.palavraMascarada.join('');
                seguro.push(letra);
            }
        }
        if (seguro.length < 1)
            Game.Engine(true, 1);
        else
            Game.Engine(true);
    };
    ;
    Game.EndGame = function (status) {
        var newGame = new Game;
        newGame.Init();
    };
    ;
    return Game;
}());
;
var main = new Game; // Instância
main.Init();
