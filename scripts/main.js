$(".logo").click(function(){
  $(".logo").animate({opacity: '0'}, "slow");
  $(".logo").animate({opacity: '1'}, "slow");
});

function loop(){
  $(".mascot").animate({bottom: '15px', }, 2500).animate({bottom: '0px'}, 2500, function() { loop(); });
}

loop();



