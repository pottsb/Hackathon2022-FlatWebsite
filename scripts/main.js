
$(".logo").click(function(){
  $(".logo").animate({opacity: '0'}, "slow");
  //$(".logo").css("transform", "rotateZ(90deg)");
  $(".logo").animate({opacity: '1'}, "slow");
});


$("h1").animate({opacity: '1', left: '0px'})