// aula sobre array e, JS 


let numeros = [10,20,30]  //criando array que ja começa com 3 itens

  console.log(`o array "numeros" contem: ${numeros}`) // mostra uma mensagem no console do NodeJs

numeros[3] = 40 // acicionando valor 40 na posiçao de chave 3 do array numeros

  console.log(`o array "numeros" contem: ${numeros}`) // mostra uma mensagem no console do NodeJs

numeros.push(50) // adicionando valor 50 na ultima posiçao do array numeoros

  console.log(`o array "numeros" contem: ${numeros}`) // mostra uma mensagem no console do NodeJs

  console.log(`o array "numeros" contem: ${numeros.length}`) // mostra uma mensagem no console do NodeJs mas o length faz mostrar apenas o tamanho do array e nao os valores

numeros.pop() //retira o ultimo item do array numeros

  console.log(`o array "numeros" contem: ${numeros}`) // mostra uma mensagem no console do NodeJs

numeros.shift() //retira o primeiro item do array numeros

  console.log(`o array "numeros" contem: ${numeros}`) // mostra uma mensagem no console do NodeJs

numeros.unshift(50,80,90, 100) //adiciona 4 itens no inicio do array numeros

console.log(`o array "numeros" contem: ${numeros}`) // mostra uma mensagem no console do NodeJs

numeros.sort() //organiza o array em ordem alfabetica

console.log(`o array "numeros" contem: ${numeros}`) // mostra uma mensagem no console do NodeJs



// area de loops

for (let posiçao = 0; posiçao < numeros.length;posiçao++) { // começa o for criando variavel posiçao e atribuindo valor 0 enquanto variavel posiçao for menor que numeros.length  e adiciona 1 no valor de contador
    console.log( numeros[posiçao]) // mostrar a mensagem com o numero do valor da variavel posiçao no console do NodeJs
}


// faz o mesmo do de cima so que de maneira simplificada

for (let pos in numeros) {
    console.log( numeros[pos])
}


//indentificadores de posiçao

let posiçaoo = numeros.indexOf(100) // variavel popsiçaoo recebe o valor da posiçao do item 100 no array numeros
    if (posiçaoo == -1) { // se o valor recebido for -1 faz...      OBS: -1 e dado pelo indexOf quando nao tem o valor pedido no array
        console.log(`Valor nao encontrado`) //mostra a mensagem quando o valor nao e encontrado
    } else { // e se encontrar o valor ...
  console.log(`O valor esta na posiçao ${posiçaoo}`) //mostrar a mensagem com a posiçao do valor pedido
    }
