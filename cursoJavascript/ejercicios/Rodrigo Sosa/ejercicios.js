
//function vaciarPapelera(texto) 
    // Esta función debe recibir texto y convertirlo a un array y 
    //devolverlo habiéndole quitado los elementos que sean un asterisco (*)
    // Por ejeplo:
    // vaciarPapelera(a1*5) 
    // debe devolver:
    // ['a',1,5]
function cleanTrash(texto)
{
    var characters = texto.split("");
    for(i = 0; i < characters.length; i++)
        if(characters[i] === "*")
            characters.splice(i, 1);

    document.getElementById("result").innerHTML = "VaciarPapelera : ["+characters+"]";
}
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

function groupByElements(texto){
    var characters = texto.split("");
    var readoo = [];
    //characters.sort();    
    for(i = characters.length; i >= 0 ; i--)
        if(isNaN(characters[i]))
            readoo.push(characters[i])
        else
            readoo.unshift(characters[i]);
    
    document.getElementById("result").innerHTML = "agruparElementos : ["+readoo+"]";
}
//function ponerBonitasLasLetras(texto) 
    // Esta función debe recibir un texto y convertirlo a un array de números
    // y letras y devolverlo con las letras vocales en mayúsculas 
    // y las consonantes en minúsculas. Los números no deben ser tratados.
    // Por ejemplo:
    // ponerBonitasLasLetras([157aJpE])
    // debe devolver:
    // [1,5,7,'A','j','p','E']



function beautifyLetters(texto){
    var characters = texto.split("");
    var str = "AaEeIiOoUu";
    for(i = 0; i < characters.length ; i++)
        if(isNaN(characters[i]))
            if(str.indexOf(characters[i]) != -1)
                characters.splice(i,1, characters[i].toUpperCase());
            else
                characters.splice(i,1, characters[i].toLowerCase());

    document.getElementById("result").innerHTML = "ponerBonitasLasLetras : ["+characters+"]";           
}


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

/* patrones */
/*function beautifyNumbers(texto){
    var characters = texto.split(/[A-Za-z]/);
    var numbers = [];
    for(i = 0 ; i < characters.length ; i++)
        if((characters[i]) !== "") 
            numbers.push(characters[i]);        

    for(j = 0; j < numbers.length ; j++)
        numbers.splice(j, 1, operate(numbers[j]));

    document.getElementById("result").innerHTML = "ponerBonitosLosNumeros : ["+numbers+"]";           
}
*/


/* pfff */
function beautifyNumbers(texto){
    var characters = texto.split("");
    var nasty = [];
    x = 0;
    while(x < characters.length){        
        suma=0;
        if(isNaN(characters[x])){
            nasty.push(characters[x])            
        }
        else{            
            while(!isNaN(characters[x]) && (x < characters.length)){
                suma+=parseInt(characters[x]);              
                x++;                
            }               
            nasty.push(operate(suma));            
        }   
        x++;

    }
    document.getElementById("result").innerHTML = "ponerBonitosLosNumeros : ["+nasty+"]";           
}

/* kk nº 2 */
function operate(n){
    
    str = n.toString();
    result = 0;
    if(str.length > 1){
        for(i = 0; i < str.length; i++)
            result+= parseInt(str[i]);
        
        return operate(result); 
    }
    else{
        return n;
    }
}


//Asociar
function differ(){
    word = document.getElementById("word").value;
    letters = word.split(",");

    var search;
    for (i = 0; i < letters.length; i++){           
        search = parseInt(letters[i]);
        for (j = 0 ; j < letters.length; j++) {
            if (i != j && (parseInt(letters[j]) < 0) && parseInt(letters[j])+parseInt(letters[i]) == 0)
                pos = i +","+j;
        }
    }

    document.getElementsByTagName("h1")[0].innerHTML = pos;
}