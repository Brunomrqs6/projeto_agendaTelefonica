const form = document.getElementById('form-tel')
const numerosCont = [];

let linhas = ' ';

form.addEventListener('submit', function(e){ //função para prevenir que o formulário resete e para rodar as outras funções
    e.preventDefault();

    adicionaLinha();
    atualizaLinha();
    atualizaNum();
})

function adicionaLinha (){ //função para adicionar linhas na tabela com as informações novas
    const inputNomeContato = document.getElementById('nome-contato') //variavel pra notas e nomes
    const inputNumeroContato = document.getElementById('numero-contato')

    numerosCont.push(parseFloat(inputNumeroContato.value));

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputNumeroContato.value}</td>`
    linha += `</tr>`

    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = ' ';
 
}


function atualizaLinha (){ //função para substituir e adicionar as linhas da tabela com as informações da função anterior
    const atualizaAgenda = document.querySelector('tbody');
    atualizaAgenda.innerHTML = linhas;
}

function atualizaNum (){ //função para dizer a quantidade de contatos na agenda
    document.getElementById('numerototal').innerHTML = numerosCont.length
}
