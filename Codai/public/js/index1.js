const nome = "Paulo Cuadros";
let nome2 = "";
let pessoaDefault = {
  nome: "Paulo Roberto Machado Cuadros",
  idade: "29",
  trabalho: "Desempregado",
};

let nomes = ["Paulo Machado", "Paulo Cuadros", " Paulo Roberto"];

let pessoasListaVazia = [];

let pessoas = [
  {
    nome: "Paulo Machado",
    idade: "29",
    trabalho: "Desempregado",
  },
  {
    nome: "Pedro Henrique",
    idade: "30",
    trabalho: "Jogador",
  },
];

console.log("Valor Inicial: ");
console.log(nome2);

nome2 = "Paulo Machado";

console.log("Valor alterado: ");
console.log(nome2);

function alterarNome() {
  nome2 = "Paulo Roberto Machado Cuadros";
  console.log("Valor alterado: ");
  console.log(nome2);
}

function recebeEalteraNome(novoNome) {
  nome2 = novoNome;
  consol3.log("Valor alterado recebendo um nome: ");
  console.log(nome2);
}
function imprimiPessoa(pessoa) {
  console.log("nome: " + pessoa.nomes);
  console.log("Idade: " + pessoa.idade);
  console.log("Trabalho: " + pessoa.trabalho);
}

console.log(pessoas);

alterarNome();

function adicionarPessoa(pessoa) {
  pessoas.push(pessoa);
}

adicionarPessoa({
  nome: "Paulo Machado",
  idade: "29",
  trabalho: "Jogador",
});

console.log(pessoas);

function imprimirPessoas(){
  pessoas.forEach((item) =>{
      console.log("nome: " + item.nome);
      console.log("Idade: " + item.idade);
      console.log("Trabalho: " + item.trabalho);
  
})}

imprimirPessoas();