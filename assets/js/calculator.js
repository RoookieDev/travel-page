let keyboardBtn = document.querySelectorAll(".keywordBtn");
let inputField = document.querySelector("#user_input");
let clearBtn = document.querySelector(".btnClear");
let eqaulBtn = document.querySelector(".equal");
let rootBtn = document.querySelector(".rootBtn");
$(keyboardBtn).click(function(){
   var keyboardVal = $(this).val();
   var inputVal = inputField.value;
   var newInput = inputVal + keyboardVal;
   $(inputField).val(newInput);
});

clearBtn.addEventListener("click", function(){
$(inputField).val(
    function(index, value){
        return value.substr(0, value.length-1);
    }
);
});

eqaulBtn.addEventListener("click",() =>{
    var inputVal = inputField.value;
    var newInput = newInput + inputVal;
    var output = eval(inputVal);
    console.log(output);
    inputField.value=output;
});

rootBtn.addEventListener("click", ()=>{
var inputVal = inputField.value;
var newInput = eval(inputVal)
var num = eval(newInput)
var output = Math.sqrt(num);
inputField.value = output;
});