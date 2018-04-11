var nums = [1];
document.getElementById("primos").addEventListener("click", () => {
    for (var i = 2 ; i<=100 ; i++) {
        var flag =  true;
        for(var j=2; j<i; j++){
            if(!(i%j)){
              flag = !flag;
              break;  
            }
        }
        if(flag)
            nums.push(i);
    }
     document.getElementById("resul").innerHTML = nums;
});