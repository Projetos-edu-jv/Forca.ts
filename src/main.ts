// console.log('Olá Mundo');

interface System { readonly palavra: string };

class Game implements System
{
	readonly palavra: string;
 
	constructor() { this.palavra = this.GetPalavra() };
 
	Init(): void
	{
		console.log("Jogo iniciado!");
	 
		this.Loop(); //Faz loop do jogo
	};
 
	private Loop(): void
	{
		console.log("Coisas que vão acontecer nesse jogo!");
	 
		const letra: string = this.GetLetra();
	 
		this.Verificador( letra );
	};

	private GetLetra(): string
	{
		console.log("Recebe Letra");
	 
		return "";
	};

	GetPalavra(): string
	{
		console.log("Recebe Palavra");

		return "";
	};

	private Verificador( letra: string ): void
	{
		console.log("Verifica letra com palavra");
	 
		letra === this.palavra
			? console.log("Venceu!")
			: console.log("Perdeu!");

		this.EndGame();
	};

	private EndGame(): void
	{
		console.log("Encerra loop");
		console.log("Limpa o jogo");
		console.log("cria nova palavra");
		console.log("Espera main ser chamada denovo");
	};
};

const main = new Game;

main.Init();
