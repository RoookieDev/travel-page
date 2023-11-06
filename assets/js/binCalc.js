let user_input = document.querySelector("#inputBx");

function binaryDecimal(){
    var userValue = user_input.value;
    if(userValue==""){
        alert("Empty");
        return false;
    }
    var i = 0;
    var decimalValue = 0;
    var pattern = /[2-9]/;
    if(!userValue.match(pattern)){
        while(userValue > 0){
            var rem = userValue % 10;
            decimalValue = decimalValue + rem*Math.pow(2, i);
            i = i+1;
            userValue = userValue - rem;
            userValue = userValue/10;
        }
      console.log(decimalValue); 
    }
    else{
      console.log("sorry");
    }
    user_input.value = decimalValue;
    
}


function decimalBinary(){
    var userValue = user_input.value;
    if(userValue==""){
        alert("Empty");
        return false;
    }
    var i = 1;
    var j=0;
    var binaryValue = 0;
    while(userValue > 0){
       var rem = userValue % 2;
       binaryValue = binaryValue + rem*i;
       
       i=i*10;
       userValue = userValue-rem;
       userValue = userValue/2 

    }
    user_input.value = binaryValue;
}


let equlBtn = document.querySelector(".outputBtn");
equlBtn.addEventListener("click", ()=>{
    if(document.getElementById("binNum").checked==true){
        binaryDecimal();
    }
    else if(document.getElementById("decNum").checked==true){
        decimalBinary();
    }
    else{
        user_input.value = "Error";
    }
})

let keyWord = document.querySelectorAll(".numBtn");
$(keyWord).click(function(){

    var  keyValue = this.value;
    var inputData = user_input.value;
    var outPut = inputData + keyValue;
    user_input.value = outPut;
 

});

let clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click",()=>{
    $(user_input).val(
        function(index, value){
            return value.substr(0, value.length - 1);
    })
})
   
