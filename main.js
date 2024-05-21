let notas = []
let pesos = [];


for(let i = 0; i < 3; i++){
    let nota = parseFloat(prompt("Digite a nota " + (i+1) + ":"))
    
    while (isNaN(nota)){
        alert("Por favor insira um valor válido.")
        nota = parseFloat(prompt("Digite a nota " + (i+1) + ":"))
    }

    notas.push(nota);

    let peso = parseFloat(prompt("Digite o peso para a nota " + (i + 1) + ":"));
    while (isNaN(peso)) {
      alert("Por favor, digite um número válido para o peso.");
      peso = parseFloat(prompt("Digite o peso para a nota " + (i + 1) + ":"));
    }
    pesos.push(peso);

}

let somaNotasPesos = 0;
let somaPesos = 0;
for (let i = 0; i < notas.length; i++) {
  somaNotasPesos += notas[i] * pesos[i];
  somaPesos += pesos[i];
}

let mediaPonderada = somaNotasPesos / somaPesos;
console.log("A média ponderada das notas é: " + mediaPonderada.toFixed(2));
