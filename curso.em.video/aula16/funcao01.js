//função pra saber se o parametro 'n' é par ou impar!

function parimp(n) {
    if (n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}

let res = parimp(18)
console.log(res)