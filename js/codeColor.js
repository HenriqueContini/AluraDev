var botaoCor = document.querySelector('.personalization__color');
var codeDiv = document.querySelector('.code__div');
var cores = ['#6BD1FF', '#6B83FF', '#9AFF6B', '#FFC46B', '#FF6BCD'];
var contador = 1;

codeDiv.style.backgroundColor = cores[0];
botaoCor.style.backgroundColor = cores[0];

botaoCor.addEventListener('click', () => {
    codeDiv.style.backgroundColor = cores[contador];
    botaoCor.style.backgroundColor = cores[contador];

    if(contador >= 4){
        contador = -1;
    };

    contador++;
});