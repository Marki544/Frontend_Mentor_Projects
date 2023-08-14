const input = document.getElementById("input");
const btn = document.getElementById("btn");
const errorMsg = document.getElementById("error-paragraph");

btn.addEventListener('click', function(){
    let inputData = input.value;

    if(inputData.includes("@") && inputData.includes(".")){
        alert("We will notify you!");
        input.style.border = "1px solid #c2d3ff";
        errorMsg.style.display = "none";
    }else{
        input.style.border = "1px solid #ff5263";
        errorMsg.style.display = "block";
    }
});