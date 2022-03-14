//https://i.imgur.com/Lda77tU.jpg

const debugMode = true;
const stdLength = 500; //Pretty sure if you change this the website will go on fire.
const screenNames = ['.OuterBoxOne', '.OuterBoxTwo', '.OuterBoxThree', '.OuterBoxFour'];

$(function () {

  //stores direct refrences to all screens in the docment in an array
  storedScreens = StoreScreens(screenNames);

  //sets the document lendth relative to how many screens are used.
  docLen = (screenNames.length * 1000)
  $(".mainContainer").css("height", docLen+"px");

  CrossFade(storedScreens, stdLength)

  //functions called when scrolling happens
  $(window).scroll(function() {
    CrossFade(storedScreens, stdLength)
    Fade('.murloc', 1200)
  });

  $(".murloc").click(function(){
    $(".murlocHead").animate({top: '11%'}).animate({left: '60%'}, "slow").animate({top: '20%'}, function () { $(this).removeAttr('style'); });
  });

  //Looks up and stores direct refrences to screens. Doing this once on load to try improve performance.
  function StoreScreens(screenNames){
    screenArray = new Array();

    screenNames.forEach(function(item){
      screenArray.push($(item));
    })

    return screenArray;
  }

  //Shows and hides invisible screens so clicks and text selection works.
  function UpdateDisplay(screen){
    if(screen.css("opacity") == 0){
      screen.hide();
    }else{
      screen.show();
    }
  }

  function CrossFade(storedScreens, stdLength) {

    //stores the current page position
    pagePosition = document.documentElement.scrollTop;

    //calculates the index of the first active screen
    if(pagePosition < stdLength){
      indexPos = 0;
    }else{
      indexPos = Math.floor(pagePosition / 1000)
    }

    //store references to the active screens
    screen1 = storedScreens[indexPos];
    screen2 = storedScreens[indexPos+1];

    //sets the fade in and out points
    fadeStart = (indexPos * stdLength * 2) + stdLength;
    fadeEnd = fadeStart + stdLength;

    //an attempt to make sure screens are fully visable or fully hidden --- REWRITE THIS?
    if (pagePosition < fadeStart) {
      opacity = 0;
    }else if(pagePosition > fadeEnd){
      opacity = 1;
    }else{ 
      opacity = (pagePosition - fadeStart) / (fadeEnd - fadeStart)
    }
    if(indexPos >= 1){
      storedScreens[indexPos-1].css({ opacity: 0 });
    }
  
    if(debugMode){console.log("screen1: " + screen1 + " screen2: " + screen2 + " Absolute position: " + pagePosition + " Opacity: " + opacity + "Fade Start: " + fadeStart + "Fade End: " + fadeEnd)}
    
    //update opacity.
    screen1.css({ opacity: 1 - opacity });
    UpdateDisplay(screen1);

    //update opacity while checking if the last screen is out of bounds.
    if(indexPos + 1 < storedScreens.length){
      screen2.css({ opacity: opacity });
      UpdateDisplay(screen2);
    }
  }

  //fades objects in and out at a set point on the page
  function Fade(element, fadeStart){
    if (document.documentElement.scrollTop  > fadeStart) {
      $(element).fadeIn("slow");
    }else{
      $(element).fadeOut();
    }
  }



  //https://www.w3schools.com/jquery/jquery_fade.asp
  function InstantCrossFade(storedScreens, stdLength) {

    //stores the current page position
    pagePosition = document.documentElement.scrollTop;

    //calculates the index of the first active screen
    if(pagePosition < stdLength){
      indexPos = 0;
    }else{
      indexPos = Math.floor(pagePosition / 1000)
    }

    //store references to the active screens
    screen1 = storedScreens[indexPos];
    screen2 = storedScreens[indexPos+1];

    //sets the fade in and out points
    fadeStart = (indexPos * stdLength * 2) + stdLength;
    fadeEnd = fadeStart + stdLength;

    //an attempt to make sure screens are fully visable or fully hidden --- REWRITE THIS?
    if (pagePosition < fadeStart) {
      opacity = 0;
    }else if(pagePosition > fadeEnd){
      opacity = 1;
    }else{ 
      opacity = (pagePosition - fadeStart) / (fadeEnd - fadeStart)
    }
    if(indexPos >= 1){
      storedScreens[indexPos-1].css({ opacity: 0 });
    }
  
    if(debugMode){console.log("screen1: " + screen1 + " screen2: " + screen2 + " Absolute position: " + pagePosition + " Opacity: " + opacity + "Fade Start: " + fadeStart + "Fade End: " + fadeEnd)}
    
    //update opacity.
    screen1.css({ opacity: 1 - opacity });
    UpdateDisplay(screen1);

    //update opacity while checking if the last screen is out of bounds.
    if(indexPos + 1 < storedScreens.length){
      screen2.css({ opacity: opacity });
      UpdateDisplay(screen2);
    }
  }


});