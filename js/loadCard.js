const dados = JSON.parse(sessionStorage.getItem('dados'))
const cardsContainer = document.querySelector('.cards__container')

if(dados != null){
    dados.forEach(elemento => {
        let card = document.createElement('div')
        card.classList.add('card')

        let conteudo = `
        <div class="card__code__div" style="background-color:${elemento.cor}">
            <div class="card__code__background">
                <div class="card__code__balls">
                    <div class="ball ball-1"></div>
                    <div class="ball ball-2"></div>
                    <div class="ball ball-3"></div>
                </div>
                <div class="card__code">
                    <p class="code"><xmp>${elemento.codigo}</xmp></p>
                </div>
            </div>
        </div>
        <div class="card__info">
            <h3 class="card__info__title">${elemento.nome}</h3>
            <p class="card__info__description">${elemento.descricao}</p>
            <div class="card__social">
                <div class="social__comment">
                    <p class="social__number">0</p>
                </div>
                <div class="social__like">
                    <p class="social__number like">0</p>
                </div>
                <div class="social__profile">
                    <img src="./src/perfil-git.png" alt="Foto perfil" class="social__img__profile">
                    <p class="name__profile">Henrique</p>
                </div>
            </div>
        </div>
        `
        
        card.innerHTML = conteudo
        cardsContainer.appendChild(card)
    });
}