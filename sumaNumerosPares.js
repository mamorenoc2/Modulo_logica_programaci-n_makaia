
const sumaNumPares = (lista) => {
    sumaPares = 0;
    for(let i = 1; i < lista.length; i++ ) {
        if (lista[i] % 2 == 0){
            sumaPares += lista[i];
        }
    }
    return sumaPares;
}

console.log(sumaNumPares([1, 2, 3, 4, 5, 6]));