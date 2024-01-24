
function rank (victory, losses){
    let valueRank = victory - losses
    return valueRank
}

let userRank = rank( 192, 1)

if(userRank < 10 ){
    console.log(`O herói tem saldo de ${userRank} e está no nível de Ferro`)
}else if(userRank <= 11 || userRank <= 20){
    console.log(`O herói tem saldo de ${userRank} e está no nível de Bronze`)
}else if(userRank <= 21 || userRank <= 50){
    console.log(`O herói tem saldo de ${userRank} e está no nível de Prata`)
}else if(userRank <= 51 || userRank <= 80){
    console.log(`O herói tem saldo de ${userRank} e está no nível de Ouro`)
}else if(userRank <= 81 || userRank <= 90){
    console.log(`O herói tem saldo de ${userRank} e está no nível de Diamante`)
}else if(userRank <= 91 || userRank <= 100){
    console.log(`O herói tem saldo de ${userRank} e está no nível de Lendário`)
}else{
    console.log(`O herói tem saldo de ${userRank} e está no nível de Imortal`)
}


