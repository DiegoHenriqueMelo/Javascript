let val = [ 3,5,21,6,26,4,423,8 ]

// console.log(val)
// for(let pos =0; pos < val.length; pos++){
//     console.log(`a posição de ${pos} tem o valor de ${val[pos]}`)
// }

for(let pos in val){
    console.log(`a posição de ${pos} tem o valor de ${val[pos]}`)
}
