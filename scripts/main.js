$(".logo").click(function(){
  $(".logo").animate({opacity: '0'}, "slow").animate({opacity: '1'}, "slow");
});

function mascotAnimation(_mascot){
  _mascot.animate({bottom: '15px'}, 2500).animate({bottom: '0px'}, 2500, function() { mascotAnimation(_mascot); });
  
}

function twinkleAnimation(_twinkle){
  console.log("Twinkle Twinkle");
  _twinkle.animate({opacity:'0'}, 2500).animate({opacity:'1'}, 2500, function() { twinkleAnimation(_twinkle); });
}

mascot = $(".mascot");
starField = $(".starField");

mascotAnimation(mascot);
twinkleAnimation(starField);