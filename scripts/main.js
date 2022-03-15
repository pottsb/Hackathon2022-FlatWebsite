
$("h1").animate({opacity: '1', left: '0px'}, "slow");
$(".logo").animate({opacity: '1'}, "slow");

$(".logo").click(function(){
  $(".logo").animate({opacity: '0'}, "slow");
  $(".logo").animate({opacity: '1'}, "slow");
});