let produto_selecionado = document.querySelectorAll('button');
let itens_adicionados = document.querySelector('#itens-adicionados');
const abrir_carrinho = document.querySelector('#carrinho');

let produtos_no_carrinho = 0;
let nomes_dos_produtos = ["Coturno Vintage 1", "Coturno Vintage 2", "Coturno Vintage 3", "Coturno Vintage 4"];
let produtos = [];

produto_selecionado.forEach(function(botao) {
    botao.addEventListener('click', function() {
        produtos_no_carrinho += 1;
        itens_adicionados.textContent = produtos_no_carrinho;
        produtos.push(nomes_dos_produtos[this.id]);
    });
});

abrir_carrinho.addEventListener('click', function() {
    alert(`Você deseja comprar ${produtos}?`);
})



