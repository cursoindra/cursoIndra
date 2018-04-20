document.getElementById("elim").addEventListener("click", () => {
    var letters = document.getElementById("txt").value.split("");
    /**letters.forEach( function(letter, index) {
        if(letter == "*"){
            letters.splice(index, 1);
        }
    });
    }*/
    letters = letters.filter(function (letter) {
        return letter !== "*";
    });
    mostrar(letters);
});

document.getElementById("agr").addEventListener("click", () => {
    var letters = document.getElementById("txt").value.split("");
    var sal = [];
    letters.forEach( function(letter, index) {
        if(isNaN(parseInt(letter))){
            sal.push(letter);
        }
        else {
            sal.unshift(letter);
        }
    });
    
    mostrar(sal);
});

document.getElementById("letr").addEventListener("click", () => {
    var letters = document.getElementById("txt").value.toLowerCase().split("");
    var vowels = ["a","e","i","o","u"];
    letters.forEach( function(letter, index) {
        if(vowels.includes(letter)){
            letters.splice(index, 1, letter.toUpperCase());
        }
    });
    mostrar(letters);
});

document.getElementById("num").addEventListener("click", () => {
    var letters = document.getElementById("txt").value.toLowerCase().split("");
    var sal = [];
    var num = "";
    letters.forEach( function(letter, index) {
        if(!isNaN(parseInt(letter))){
            num += letter;
        }
        else {
            if(num != ""){
                sal.push(sumar(num));
            }
            sal.push(letter);
            num = "";
        }
        if((index == letters.length - 1) && (num != "")) {
            sal.push(sumar(num));
        }
    });
    mostrar(sal);
});


function sumar (num) {
    var nums = num.split("");
    var end = false;
    var sum = 0;
    
    while (!end) {
        nums.forEach( function(element, index) {
            sum += parseInt(element);
        });
       
        if(sum.toString().split("").length>1){
            nums = sum.toString().split("");
            sum = 0;
        }
        else{
            end = true;
        }
    }
    return sum;
}






function mostrar (arr) {
    document.getElementById("resul").innerHTML = arr;
}