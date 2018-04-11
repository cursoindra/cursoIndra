document.getElementById("par").addEventListener("click", () => {
    var nums = document.getElementById("nums").value.split(",");
    var nums2 = document.getElementById("nums").value.split(",");
    var sal = [];
    var end = [];
    /**for(var ind = 0; ind<nums.length; ind++){
        var num = nums[ind];
        var len = nums.length;
        if(num.substring(0, 1) == "-") {
            for(var ind2 = 0; ind2<nums2.length; ind2++){
                var num2 = nums2[ind2];
                if(num.substring(1, 2) == num2){
                    sal.push("("+ind+","+ind2+")");

                    nums.splice(ind, 1);
                    var index = nums.indexOf(num2);
                    if (index > -1) {
                        nums.splice(index, 1);
                    }
                    nums2.splice(ind2, 1);
                    index = nums2.indexOf(num);
                    if (index > -1) {
                        nums2.splice(index, 1);
                    }
                }
            }
        }
        else{
            for(var ind2 = 0; ind2<nums2.length; ind2++){
                var num2 = nums2[ind2];
                if(num2.substring(1, 2) == num){
                    sal.push("("+ind+","+ind2+")");

                    nums.splice(ind, 1);
                    var index = nums.indexOf(num2);
                    if (index > -1) {
                        nums.splice(index, 1);
                    }
                    nums2.splice(ind2, 1);
                    index = nums2.indexOf(num);
                    if (index > -1) {
                        nums2.splice(index, 1);
                    }
                }
            }
        }
        if(len == nums.length){
            end.push(num);
            nums.splice(ind, 1);
        }
        else{
            ind = -1;
        }
    }*/
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

