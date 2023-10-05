$(document).ready(function(){
    $('#numero-contato').mask("(00) 00000-0000", 
    {placeholder: "(00) 00000-0000"})
})

const form = document.getElementById('form-tel')
const numerosCont = [];
const nomesCont = [];

let linhas = ' ';

form.addEventListener('submit', function(e){ //função para prevenir que o formulário resete e para rodar as outras funções
    e.preventDefault();

    adicionaLinha();
    atualizaLinha();
    atualizaNum();
})

function adicionaLinha (){ //função para adicionar linhas na tabela com as informações novas
    
    const inputNomeContato = document.getElementById('nome-contato') //variavel para o nome enumero
    const inputNumeroContato = document.getElementById('numero-contato')

    numerosCont.push(parseFloat(inputNumeroContato.value)); //pegará o número dos contatos e transformará de string para float

    let linha = '<tr>' //adicionará ou substuirá as linhas da tabela que fizemos no html
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputNumeroContato.value}</td>`
    linha += `</tr>`

    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
        
 }

function atualizaLinha (){ //função para substituir e adicionar as linhas da tabela com as informações da função anterior
    
    const atualizaAgenda = document.querySelector('tbody'); //variável que pegara o corpo da tabela
    atualizaAgenda.innerHTML = linhas; //innerhtml substuirá o texto contido no corpo da tabela
}

function atualizaNum (){ //função para dizer a quantidade de contatos na agenda
    
    document.getElementById('numerototal').innerHTML = numerosCont.length; // atualizará a quantidade de número no pé da tabela
}

