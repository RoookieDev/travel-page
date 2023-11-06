$(document).ready(function(){
    $(".card-con .card").mouseover(function(){
      $(".card-con .card").removeClass("active") 
      $(this).attr("class","card active");
    })
    $(".card-con .card").mouseout(function(){
        $(this).removeClass("active") 
        
      })
});