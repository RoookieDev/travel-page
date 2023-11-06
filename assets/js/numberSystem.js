let user_input = document.querySelector("#user_input");
 
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
        $(".answer").css("transform", "rotateX(0)");
        $("#titleBx").html("Decimal Value");
        $("#decimalBx").css("display","block");
        $("#decimalBx").html(decimalValue);
    }
    else{
        $(".answer").css("transform", "rotateX(0)");
        $("#titleBx").html("the Number which you entred in not binary");
        $("#decimalBx").css("display","none");
    }
    
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
    $(".answer").css("transform", "rotateX(0)");
    $("#titleBx").html("Binary Value");
    $("#decimalBx").css("display","block");
    $("#decimalBx").html(binaryValue);
}


