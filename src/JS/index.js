/*

    Objetivo 1 - quando o usuário clicar na bibliografia deve abrir uma caixa com os links 
        Passo 1 - pegar o botão de seleção de bibliografia par poder verificar quando o usuário clicar

        Passo 2 - pegar o elemento do conteudo que precisa ser mostrado 

        Passo 3 - pegar o clik do usuário

        Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de livros na dentro do botão apareça o conteúdo


    Objetivo 2 - caso a caixxa já esteja aberta ela irá de fechar
        
        Passo 1 - vereficar se o botão ja está aberto, se sim, remover a classe ativo, para esconder o conteúdo

*/
const botao1 = document.getElementById('gabriele-btn')

const botao2 = document.getElementById('duarte-btn')

const elementoLivros1 = document.getElementById('gabi-livros')

const elementoLivros2 = document.getElementById('lara-livros')

botao1.addEventListener("click", () => {
    elementoLivros1.classList.toggle("ativo")
});

botao2.addEventListener("click", () => {
    elementoLivros2.classList.toggle("ativo")
});
    