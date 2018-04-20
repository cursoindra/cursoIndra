document.getElementById("par").addEventListener("click", () => {
    var nums = document.getElementById("nums").value.split(",");
    var nums2 = document.getElementById("nums").value.split(",");
    var sal = [];
    var end = [];
    
    var emparejados = [];
    

    nums.forEach( function(num, ind) {
        num = parseInt(num);
        var emp = false;
        if(!num) {
            sal.push("("+(ind+1)+","+(ind+1)+")");
            emparejados.push(ind);
        }
        else{
            nums2.forEach( function(num2, ind2) {
                num2 = parseInt(num2);
                if(!(num+num2) && !emparejados.includes(ind) && !emparejados.includes(ind2)){
                    sal.push("("+(ind+1)+","+(ind2+1)+")");
                    emparejados.push(ind);
                    emparejados.push(ind2);
                    emp = true;
                }
            });
        }
        if(!emp && !emparejados.includes(ind)) {
            end.push(ind+1);
            emparejados.push(ind);
        }
    });

    document.getElementById("resul").innerHTML = sal.concat(end);
});

