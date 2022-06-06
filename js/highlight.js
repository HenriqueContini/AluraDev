const linguagem = document.getElementById('language')
const areaCodigo = document.querySelector('.code__wrapper')
const botaoHL = document.querySelector('.button__highlight')

function aplicaHighLight() {
    const codigo = areaCodigo.innerText
    areaCodigo.innerHTML = `<code class='preview hlsj ${linguagem.value}' contenteditable="true" aria-label='Editr de código'></code>`
    areaCodigo.querySelector('code').textContent = codigo 
    hljs.highlightElement(areaCodigo.querySelector('code'))
}

botaoHL.addEventListener('click', () => {
    aplicaHighLight()
})