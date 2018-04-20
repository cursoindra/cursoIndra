// == compara por valor
// === compara por valor y tipo
var min = 0;
    var hor = 0;
    var seg = 0;

function compare () {
    
    var a = 100;
    var b = "100";
    console.log("a==b " +  (a==b));
    console.log("a===b " + (a===b));

    console.log(3+7+8+5+6+9);
    console.log(3+7+8+"5"+6+9);

/*
    switch (expression) {
        case label_1:
            // statements_1
            break;
        default:
            // statements_def
            break;
    }
*/
    var paises = ["España", "Francia", "Italia"];
    console.log(paises);

    console.log('--Push--');
    paises.push("Alemania");
    console.log(paises);

    console.log('--Pop--');
    console.log(paises.pop());
    console.log(paises);

    console.log('--Shift--');
    console.log(paises.shift());
    console.log(paises);

    console.log('--Unshift--');
    paises.unshift("Grecia");
    console.log(paises);

    console.log('--Reverse--');
    paises.reverse();
    console.log(paises);

    console.log('--Sort--');
    paises.sort();
    console.log(paises);

    console.log('--Slice--');
    paises.push("Hungria");
    paises.push("Republica Checa");
    console.log(paises.slice(3));
    console.log(paises.slice(0,3));
    console.log(paises);

    console.log('--Splice sacar--');
    console.log(paises.splice(3));
    console.log(paises.splice(0,1));
    console.log(paises);

    console.log('--Splice Insertar--');
    paises.splice(0,0, "Portugal");
    console.log(paises);

    console.log('--Splice sustituir--');
    paises.splice(1,2, "Inglaterra", "Holanda");
    console.log(paises);


    for (var i = paises.length - 1; i >= 0; i--) {
        console.log(paises[i]);
    }

    for (pais in paises) {
        console.log("Pais con in: " + paises[pais]);
    }

    paises.forEach( function(pais, index) {
        console.log('Pais en foreach #' + index + ": " + pais);
    });

    alert("hola");
    setTimeout(() => alert("hola tras x tiempo"), 3000);

    setInterval(conta, 1000);

    var ele = {"nombre": "jose", "edad" : 3};

    console.log(ele);

    var texto = JSON.stringify(ele);

    console.log(texto);

    var ele2 = JSON.parse(texto);

    console.log(ele2);

    var texto2 = JSON.stringify(ele2);

    console.log(texto2);

}

function conta () {
    if(seg++>59){
        seg = 0;
        
        if(min++>59){
            min = 0;
            hor++;
        } 
    }
    document.getElementById("horas").innerHTML = hor;
    document.getElementById("minutos").innerHTML = min;
    document.getElementById("segundos").innerHTML = seg;


}
