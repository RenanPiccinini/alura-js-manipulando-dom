const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


/*
const robotron = document.querySelector("#robotron");

robotron.addEventListener("click", dizOi);


robotron.addEventListener("click", () => { //função anonima já com ES6
    console.log("Cliquei no robô"); //Assim só vamos conseguir usar aqui essa função
});

//pega as informações do evento "click"
robotron.addEventListener("click", (evento) => { 
    //mostra todas informações para conseguir manipular ele
    console.log(evento); 
});


function dizOi(nome) { //Função declarada/nomeada
    console.log("OII " + nome); //Assim poderemos utilizar em outros lugares
    //console.log(nome);
}

dizOi("Renan");
*/

const subtrair = document.querySelector("#subtrair"); //Pega o seletor id #subtrair e adiciona na constante
const somar = document.querySelector("#somar"); //Pega o seletor id #somar e adiciona na constante
const braco = document.querySelector("#braco"); //Pega o seletor id #braco e adiciona na constante

/*
somar.addEventListener("click", () => {
    braco.value = parseInt(braco.value) + 1;
});

subtrair.addEventListener("click", () => {
    braco.value = parseInt(braco.value) - 1;
});
*/

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

controle.forEach( (elemento) => { //traz todos elementos que contenha o seletor div .controle-ajuste que pegamos acima e colocamos na const controle
    elemento.addEventListener("click", (evento) => {
        //console.log(evento) //pega todas propriedades do evento, tipo o DD
        //console.log(evento.target) //pega a propriedade target do evento, que é o elemento que foi clicado
        //console.log(evento.target.textContent) //pega o textContent do target, que é o texto no html mesmo, puro
        //console.log(evento.target.parentNode) //pega o elemento PAI do elemento que eu clicar, a div pai, nesse caso class="controle"
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //pega o valor do data-controle no html e o pai do elemento

        atualizaEstatisticas(evento.target.dataset.peca)
    })
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]") //pega o data-contador que criamos no html

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}


function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}



// TESTE DE MUDAR A COR, NÃO ESTÁ FUNCIONANDO AQUI
// function mudaCores(elementos){
//     var cores = elementos.getAttribute("data-cor");
//     var tipoElemento = elementos.getAttribute("data-tipo");
//   }