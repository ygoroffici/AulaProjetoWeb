
const alunos = [
    "manuel",
    "ygor",
    "camila",
    "gustavo",
    "guilherme",
]

console.log(`Quantidade de alunos: ${alunos.length}`);

function loopAlunos(usarForEach = false)
{
    if( !usarForEach )
    {
        for( let i = 0; i < alunos.length; i++ ) {
            console.log(`Olá ${alunos[i]}!`);
        }
    } 
    else 
    {
        console.log(">>>> Loopando usando o ForEach <<<<");
        alunos.forEach(al => {
            console.log(`Olá ${al}!`);
        });
    }
}

loopAlunos();
loopAlunos(true);

var meuContador = 0;
while( meuContador != 10 )
{
    console.log(`Contagem: ${meuContador+1}...`);
    meuContador++;
}


/*
    Botões de diversos tipos...
*/
const botaoModoEscuro = document.querySelector("#botao-tema-escuro");
const botaoBoasVindas = document.querySelector("#botao-boas-vindas")

// Modo escuro/claro
const body = document.querySelector("body");
botaoModoEscuro.addEventListener("click", () => {
    body.classList.toggle("modo-escuro");

    if( botaoModoEscuro.textContent.toLowerCase() === "modo escuro" ) {
        botaoModoEscuro.textContent = "Modo Claro";
    } else {
        botaoModoEscuro.textContent = "Modo Escuro";
    }
});

// Mensagem de bem-vindo
botaoBoasVindas.addEventListener("click", () => {
    alert("Seja bem-vindo à minha página!");
})