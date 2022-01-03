// console.log('Olá Mundo');
;
var Game = /** @class */ (function () {
    function Game() {
        this.palavra = this.GetPalavra();
    }
    ;
    Game.prototype.Init = function () {
        console.log("Jogo iniciado!");
        this.Loop(); //Faz loop do jogo
    };
    ;
    Game.prototype.Loop = function () {
        console.log("Coisas que vão acontecer nesse jogo!");
        var letra = this.GetLetra();
        this.Verificador(letra);
    };
    ;
    Game.prototype.GetLetra = function () {
        console.log("Recebe Letra");
        return "";
    };
    ;
    Game.prototype.GetPalavra = function () {
        console.log("Recebe Palavra");
        return "";
    };
    ;
    Game.prototype.Verificador = function (letra) {
        console.log("Verifica letra com palavra");
        letra === this.palavra
            ? console.log("Venceu!")
            : console.log("Perdeu!");
        this.EndGame();
    };
    ;
    Game.prototype.EndGame = function () {
        console.log("Encerra loop");
        console.log("Limpa o jogo");
        console.log("cria nova palavra");
        console.log("Espera main ser chamada denovo");
    };
    return Game;
}());
;
var main = new Game;
main.Init();
