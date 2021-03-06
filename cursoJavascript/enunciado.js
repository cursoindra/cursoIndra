
//function vaciarPapelera(texto) 
    // Esta función debe recibir texto y convertirlo a un array y 
    //devolverlo habiéndole quitado los elementos que sean un asterisco (*)
    // Por ejeplo:
    // vaciarPapelera(a1*5) 
    // debe devolver:
    // ['a',1,5]

//function agruparElementos(texto) 
    // Esta función debbe recibir un texto y convertirlo a 
    //un array con números y letras y devolverlo habiendo agrupado 
    //los elementos
    // En primer lugar se deben encontrar números, depués letras. 
    //El orden dentro de cada grupo no importa.
    // Por ejemplo: 
    // agruparElementos(Bba423J) 
    // debe devolver:
    // [4,2,3, 'B', 'a', 'J']


//function ponerBonitasLasLetras(texto) 
    // Esta función debe recibir un texto y convertirlo a un array de números
    // y letras y devolverlo con las letras vocales en mayúsculas 
    // y las consonantes en minúsculas. Los números no deben ser tratados.
    // Por ejemplo:
    // ponerBonitasLasLetras([157aJpE])
    // debe devolver:
    // [1,5,7,'A','j','p','E']

//function ponerBonitosLosNumeros(texto) 
    // Esta función debe recibir un texto y convertirlo a un array de 
    //números y letras, y devolverlo con los números "bonitos". 
    // Las letras no deben cambiar. 
    // Para poner bonito número debemos sumar todas sus cifras.
    // en caso de que el número resultante tenga más de una cifra, 
    //se petirá el proceso con este.
    // 123 se convertirá en 6 porque 1+2+3 = 6
    // 9 se convertirá en 9
    // 9956 se convertirá en 2 porque 9+9+5+6 = 29, 2+9 = 11 y 1+1 = 2
    // 793 se convertirá en 1 porque 7+9+3 = 19, 1+9 = 10 y 1+0 = 1
    // Este proceso debemos realizarlo sobre un array de elementos y 
    //aplicarlo solo a los números.