function encontrarMaximo(lista) {
    let valorMaximo = 0;
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > valorMaximo) {
            valorMaximo = lista[i];
        }
    }
    console.log(valorMaximo);
}

// Prueba la función con una lista de números
encontrarMaximo([1, 5, 16, 7, 13, 29, 10]);