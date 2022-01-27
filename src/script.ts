let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');

function calcular(n1: number, n2: number) {
    return n1 + n2;
}

botao.addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});* /


function firstLetterUpperCase(name: string): string {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
}
let nome = firstLetterUpperCase('iago');


function somar(n1: number, n2: number): number {
    return n1 + n2;
}
let alguma = somar(90, 50);



function resumo(usuario: { nome: string, idade?: number }) {
    if (usuario.idade !== undefined) {
        return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
    } else {
        return `Olá ${usuario.nome}, tudo bem?`;
    }
}
// implemento da função
let usuario = {
    nome: "Iago",
    idade: 24
};
resumo(usuario);



let idade: string | number = 90;* /



type User = {
    nome: string,
    idade: number
};

interface User {
    nome: string;
    idade: number;
}

function resumo(usuario: User) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos.`
}

resumo({
    nome: 'Iago',
    idade: 24
});


let idadeField = document.getElementById('idade') as HTMLInputElement;

console.log(idadeField.value);

//...........


function mostrarTexto(
    texto: string,
    alinhamento: 'left' | 'right' | 'center'
) {
    return `<div style = "text-align: ${alinhamento}">${texto}</div>`;
}

mostrarTexto('Iago', 'left');
mostrarTexto('Iago', 'right');
mostrarTexto('Iago', 'blabla');


function fazerRequisicao(url: string, method: 'GET' | 'POST') {
}
type Methods = 'GET' | 'POST';

let url = "https://google.com.br";
let method: Methods = 'GET';
fazerRequisicao(url, method);* /


type MathFunction = (n1: number, n2: number) => number;

const somar: MathFunction = (n1, n2) => {
    return n1 + n2;
}

const subtrair: MathFunction = (n1, n2) => {
    return n1 - n2;
}

const multiplicar: MathFunction = (n1, n2) => {
    return n1 * n2;
}

const dividir: MathFunction = (n1, n2) => {
    return n1 / n2;
}



function removerElemento(el: HTMLElement): void {
    el.remove()
}

removerElemento(document.getElementById('teste'));


const nome: string = 'Iago';
