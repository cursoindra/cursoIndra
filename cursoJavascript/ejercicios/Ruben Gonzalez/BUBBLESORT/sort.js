var nums = [];

function addNumber () {

    var num = document.getElementById("num").value;
    nums.push(parseInt(num));
    document.getElementById("array").innerHTML = nums;
}

document.getElementById("add").addEventListener("click", addNumber);


document.getElementById("sort").addEventListener("click", () => {
    var flag = true;
    var vueltas = 0;
    while(flag) {
        flag = false;
        for (var i = 0 ; i<nums.length - vueltas -1 ; i++) {
            if(nums[i]>nums[i+1]) {
                flag = true;
                var num3 = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = num3;
            }
        }        
        vueltas++;
    }
     document.getElementById("resul").innerHTML = nums;
});

