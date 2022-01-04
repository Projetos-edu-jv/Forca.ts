class Game
{
	static letrasHtml: HTMLElement;
	static palavrasHtml: HTMLElement;
	static mostraDicaHtml: HTMLElement;

	static palavra: string;
	static palavraMascarada: any;
	static errosPermitidos: number;
 
	//Inicializa variavéis críticas para o jogo
	constructor()
	{
		Game.letrasHtml = document.querySelector('.letras');
		Game.palavrasHtml = document.querySelector('.palavra');
		Game.mostraDicaHtml = document.querySelector('.dica');

		Game.palavra;
		Game.palavraMascarada;
		Game.errosPermitidos;
	};
 
	//Aloca recursos para o jogo
	Init(): void
	{
		//Palavras 
		const Array_palavras: Array<string> = ["Casa", "Carro", "Banana", "Bunda"];

		//Dica
		const dica: Array<string> = [
			'Onde vc mora',
			'Oq capota e voa!',
			'Fruta que tem duplo sentido!',
			'onde vc n erra o buraco!'
		];

		//Letras
		const letras:Array<string> = [
			"a", "b", "c", "d", "e", "f",
			"g", "h", "i", "j", "k", "l",
			"m", "n", "o", "p", "q", "r",
			"s", "u", "v", "w", "x", "y", "z"
		];

		//Escolha das dicas
		const escolheDica = Math.floor(Math.random() * dica.length);

		Game.palavra = Array_palavras[escolheDica]; //Palavra sorteada
		Game.palavraMascarada = Game.palavra.replace(/[a-z]/gi, '_'); //Mascara
		Game.errosPermitidos = 6; //Erros aceitos

		//Chama a lógica do jogo
		Game.Engine( false, NaN, dica, letras, escolheDica );
	};

	//Responsável pela lógica mais "pesada" do jogo
	static Engine ( 
		jogoIniciado: boolean,
		hit?: number,
		dica?: Array<string>,
		letras?: Array<string>,
		escolheDica?: number
	): void
	{
		if( !jogoIniciado )
		{
			const letrasRendenizadas: Array<string> = [];

			letras.map((letra) => {
				return letrasRendenizadas.push(`<button onclick="Game.Verificador('${letra}')" >${letra}</button>`);
			});

			Game.letrasHtml.innerHTML = letrasRendenizadas.join('');
			Game.palavrasHtml.innerText = Game.palavraMascarada;
			Game.mostraDicaHtml.innerHTML = `<p>${dica[escolheDica]}</p>`;
		}
		else if( !hit )
		{
			Game.palavrasHtml.innerHTML = Game.palavraMascarada;
		}
		else
		{
			Game.errosPermitidos -= hit;
			console.log( Game.errosPermitidos );
		};

		if( Game.errosPermitidos < 1 ) Game.EndGame( false );

		if (jogoIniciado) {
			const reg: RegExp = /["_"]/gi;
			if ( !reg.test(Game.palavraMascarada) ) Game.EndGame( true );
		};
	};
 
	static Verificador( letra: string ): void
	{
		let seguro: Array< never | string > = [];

		const palavraMinusculo = Game.palavra.toLowerCase();
		for (let index = 0; index <= Game.palavra.length; index++)
		{
			if(palavraMinusculo[index] == letra){
				this.palavraMascarada = this.palavraMascarada.split('');
				this.palavraMascarada[index] = letra;
				this.palavraMascarada = this.palavraMascarada.join('');
				seguro.push( letra );
			}
		}

		if( seguro.length < 1 )  Game.Engine( true, 1 );
		else Game.Engine( true );
	};
	
	static EndGame( status: boolean ): void
	{
		const newGame = new Game;

		newGame.Init();
	};
};

const main = new Game; // Instância

main.Init();