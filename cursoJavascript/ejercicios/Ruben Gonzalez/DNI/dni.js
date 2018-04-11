var letra = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

function dniLetter () {

    var num = document.getElementById("dni").value;
    var resul = num%23;

    document.getElementById("resul").innerHTML = letra[resul];
}

//document.getElementById("but").addEventListener("click", dniLetter);
document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    var num = document.getElementById("dni").value;
    var resul = num%23;
    document.getElementById("resul").innerHTML = letra[resul];
});

/*
document.getElementById("but").addEventListener("click", (event) => {
    event.preventDefault();
    var num = document.getElementById("dni").value;
    var resul = num%23;
    document.getElementById("resul").innerHTML = letra[resul];
});

*/