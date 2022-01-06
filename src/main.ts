const displayLetras: HTMLDivElement = document.querySelector('.letras');
const displayDica: HTMLDivElement = document.querySelector('.dica');
const displayPalavra: HTMLDivElement = document.querySelector('.palavra');

const palavras: Array<string> = ["Casa", "Carro", "Banana", "Bunda"];
const renderLetras: any = [];
const letras: Array<string> = [
	"a", "b", "c", "d", "e", "f",
	"g", "h", "i", "j", "k", "l",
	"m", "n", "o", "p", "q", "r",
	"s", "u", "v", "w", "x", "y", "z"
];

const dica: Array<string> = [
	'Onde vc mora',
	'Oq capota e voa!',
	'Fruta que tem duplo sentido!',
	'onde vc n erra o buraco!'
];

const reg: RegExp = /["_"]/gi;
const escolheDica = Math.floor(Math.random() * dica.length);
const palavra: string = palavras[escolheDica];

let mascara: any = palavra.replace(/[a-z]/gi, '_ ');
let errosPermitidos: number = 6;

letras.map((letra) => { renderLetras.push(`<button onclick="Verifica('${letra}')">${letra}</button>`)});

displayLetras.innerHTML = renderLetras.join('');
displayDica.innerHTML = `<p>${dica[escolheDica]}</p>`;
displayPalavra.innerHTML = mascara;

const Verifica = ( letra: string ): void =>
{
	const seguro: Array< never | string > = [];
	const palavraMinusculo = palavra.toLowerCase();

	for (let index = 0; index <= palavra.length; index++)
	{
		if(palavraMinusculo[index] == letra)
		{
			mascara = mascara.split(' ')
			mascara[index] = letra;
			mascara = mascara.join(' ');

			seguro.push( letra );
		};
	};

	( seguro.length < 1 ) ? Renderiza( false ) : Renderiza( true );
};

const Renderiza = ( hit: boolean ): void =>
{
	const res = mascara.match( reg );

	switch( hit )
	{
		case true: displayPalavra.innerHTML = mascara;  break;

		case false:
			errosPermitidos--;
			render_boy( `${errosPermitidos}` );
		break;
	};

	if( errosPermitidos < 1 )
	{
		EndGame( false )
	}
	else if( !(res instanceof Array ) ) //Verifica se o res ainda é um Array
	{
		EndGame( true );
	};
};

const render_boy = (id: string): void =>
{
	const render: HTMLElement = document.querySelector(`#_${id}`)

	render.classList.remove('off');
};

const EndGame = ( status: boolean ): void =>
{
	(status) ? alert("Você Venceu!") :alert("Você Perdeu!");

	window.location.reload();
};
