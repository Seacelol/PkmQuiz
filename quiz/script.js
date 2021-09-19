const quizData = [
    {
        questao: 'Qual o nome do z-move exclusivo do Mew?',
        a: 'Shattered Psyche',
        b: 'Gênesis Super Nova',
        c: 'Light That Burns The Sky',
        d: 'Twinkle Tackle',
        correto: 'b'
    }, {
        questao: 'De que maneira eevee evolui para umbreon?',
        a: 'Utilizando a moon Stone',
        b: 'Maximizando a amizade durante a noite',
        c: 'Maximizando a amizade durante o dia',
        d: 'Maximizando a amimzade e ultilando a moon stone',
        correto: 'b'
    }, {
        questao: 'Qual o único pokémon que possui duas mega evoluções e uma gigantamáx?',
        a:'Mew-Two',
        b:'Eternatos',
        c:'Lucario',
        d:'Charizard',
        correto:'d'
    }, {
        questao: 'Onde você pode capturar mewtwo nos jogos red e blue',
        a:'Espaço',
        b:'Liga pokémon',
        c:'Cerulian cave',
        d:'Altering cave',
        correto:'c'
    }, {
        questao:'Em que ano red e green foi lançado oficialmente no Japão?',
        a:'1996',
        b:'1997',
        c:'1998',
        d:'1999',
        correto:'a'
        
    }, {
        questao:'Qual pokémon combina os tipos elétrico e venenoso?',
        a:'Morpiko',
        b:'Toxtricity',
        c:'Nidoqueen',
        d:'Pincurchin',
        correto:'b'
    }, {
        questao:'O tipo metal foi introduzido em:',
        a:'Kanto',
        b:'Hoenn',
        c:'Alola',
        d:'Johto',
        correto:'d'
    }, {
        questao:'Em que level Raboot evolui para Cinderece?',
        a:'35',
        b:'30',
        c:'26',
        d:'16',
        correto:'a'
    }, {
        questao:'Qual é o nome da evolução que gloom ganha na segunda geração?',
        a:'Vileplume',
        b:'Chespin',
        c:'Bellossom',
        d:'Oddish',
        correto:'c'
    }, {
        questao:'Quais pokémon Red usa no jogo Super Smash Bros. Ultimate',
        a:'Pikachu, Eevee e Kadabra',
        b:'Charizard, ivysaur e Squirtle',
        c:'Charmander, Venusaur e Wartortle',
        d:'Butterfree, Piddgeot e Rattata',
        correto:'b'
    }
];

const quiz = document.getElementById ('quiz');
const questaoEls = document.querySelectorAll ('.resposta');
const questaoEl = document.getElementById ('questao');
const a_text = document.getElementById ('a_text');
const b_text = document.getElementById ('b_text');
const c_text = document.getElementById ('c_text');
const d_text = document.getElementById ('d_text');
const enviarBtn = document.getElementById('enviar');

let currentQuiz = 0;
let pontos = 0;

loadQuiz();

function loadQuiz() {   
    
    const currentQuizData = quizData[currentQuiz];

    questaoEl.innerText = currentQuizData.questao;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelecionado() {
    const respostaEls = document.querySelectorAll('.resposta');

    respostaEls.forEach((respostaEl) => {
        if(respostaEl.checked) {
            resposta = respostaEl.id;
        }
    });

    return resposta;
}

enviarBtn.addEventListener('click', () =>{
    
    const resposta = getSelecionado();
    
    if(resposta) {
        if(resposta === quizData[currentQuiz].correto) {
            pontos++;
        }

        currentQuiz++; 
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Você acertou ${pontos}/${quizData.length} questões</h2>
            <button onclick="location.reload()">Reiniciar</button>`;
        }
    }
});

//function deselectResposta() {
//    respostaEls.forEach((respostaEl) => {
//        respostaEl.checked = false;
//    });
//}