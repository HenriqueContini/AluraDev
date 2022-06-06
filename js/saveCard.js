var botaoSalvar = document.getElementById('save__button')

function saveCard() {
    let codigoProjeto = document.querySelector('.preview')
    let nomeProjeto = document.querySelector('.info__name')
    let descricaoProjeto = document.querySelector('.info__description')
    let corProjeto = document.querySelector('.personalization__color')

    let dadosSalvos = JSON.parse(sessionStorage.getItem('dados') || '[]');

    dadosSalvos.push({
        nome: nomeProjeto.value,
        descricao: descricaoProjeto.value,
        codigo: codigoProjeto.textContent,
        cor: corProjeto.style.backgroundColor
    })

    sessionStorage.setItem('dados', JSON.stringify(dadosSalvos))

    codigoProjeto.innerText = ''
    nomeProjeto.value = ''
    descricaoProjeto.value = ''
}

botaoSalvar.addEventListener('click', (evt) => {
    evt.preventDefault();
    saveCard();
})