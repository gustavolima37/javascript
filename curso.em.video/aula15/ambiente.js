/*
let num = [5,8,4]
num[3] = 6 //acrescentando manualmente o elemento no array
num.push(7)//acrescentando automatizado mais um elemento no array
num.length //um atributo pra saber o comprimento do array
num.sort() //alinhar os elementos em forma crescente no array


let num = [5,8,2,9,3]
num.push(1) //acrescentando o elemento 1 no array
num.sort() //organizando o array por ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posiçõoes`)
console.log(`O primeiro valor do vetor é ${num[1]}`) //o primeiro valor esta na chave [0] e o segundo esta no [1]
console.log(`O primeoiro valor do vetor é ${num[0]}`)


let num = [4,5,6,7,8]
for (let pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} //percuso pra exibição do vetor no JS


//só funciona pra array e objetos
let num = [4,5,6,7,8]
for(let pos in num){ //Para cada posição na variavel composta, mostrar o num[pos]
    //console.log(num[pos])
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeoiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1){
    console.log('O valor nao foi encontrado')
}else {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}

