
// all global variables which are needed for the functions

let strong_wind = new Audio("audio/strong-wind.mp3");

let strongWind2 = new Audio("audio/strongWind2.mp3");

let rainfall = new Audio("audio/rainfall.mp3");

let glass_smash = new Audio("audio/glass_smash.mp3");

let crying1 = new Audio("audio/crying1.mp3");

let crying2 = new Audio("audio/crying2.mp3");

let guitar = new Audio("audio/guitar.mp3");

let waterFlow = new Audio("audio/waterFlow.mp3");

let sound3 = new Audio("audio/sound3.mp3");

let impact1 = new Audio("audio/impact1.mp3");

let impact2 = new Audio("audio/impact2.mp3");

let nextImpact = new Audio("audio/impact2.mp3");

let lastImpact = new Audio("audio/impact2.mp3");

let gliterSound = new Audio("audio/gliterSound.mp3");

let applause = new Audio("audio/applause.mp3");

// create empty array to store the all random numbers
let numberArray = [];
let number = "";

// checking the length of the array which contain repeated same numbers.
let lengthOfCurrentNumber = counter(number);

// when click at anywhere of entire document, generate random number and functions are working accordingly

$(document).click(function(){
  let number = Math.random() * 6;
  number = Math.floor(number) + 1;

  switch (number) {
    //  when random number is 1, creator1 function will work and if same number is generated at the next Click, the page will be reloaded instead of calling the function again.

    case 1:
   lengthOfCurrentNumber = counter(1);

    if(lengthOfCurrentNumber ==1){

     creator1();

    }else{

     location.reload();

    }

      break;

    case 2:
      //  when random number is 2, creator2 function will work and if same number is generated at the next Click, the page will be reloaded instead of calling the function again.
   lengthOfCurrentNumber = counter(2);

    if(lengthOfCurrentNumber ==1){

     creator2();

    }else{

  location.reload();

    }

    break;

    case 3:
      //  when random number is 3, creator3 function will work and if same number is generated at the next Click, the page will be reloaded instead of calling the function again.
    lengthOfCurrentNumber = counter(3);

    if(lengthOfCurrentNumber ==1){

     creator3();

    }else{

    location.reload();

    }

    break;

    case 4:
      //  when random number is 4, creator4 function will work and if same number is generated at the next Click, the page will be reloaded instead of calling the function again.
    lengthOfCurrentNumber = counter(4);

    if(lengthOfCurrentNumber ==1){

     creator4();

    }else{

  location.reload();

    }

    break;

    case 5:
      //  when random number is 5, creator5 function will work and if same number is generated at the next Click, the page will be reloaded instead of calling the function again.
    lengthOfCurrentNumber = counter(5);

    if(lengthOfCurrentNumber ==1){

    creator5();

    }else{

  location.reload();

    }

    break;

    default:

    case 6:
      //  when random number is 6, creator6 function will work and if same number is generated at the next Click, the page will be reloaded instead of calling the function again.
    lengthOfCurrentNumber = counter(6);

    if(lengthOfCurrentNumber ==1){

    creator6();

   }else {

  location.reload();
  
  }

    break;

  }

});

//  counter function will check how many times of same random number are repeated
function counter(number){
  numberArray.push(number);
  let length = numberArray.filter(x => x==number).length;
  return length;
}

//  creator1 function will work when random number is 1.
function creator1(){

  $(".start").hide();

  crying1.pause();

  guitar.volume = 0.7;

  guitar.play();

  $("img").remove();

  $(".black-cover").remove();

  $(".thankYou").remove();

  $("body").css("background-image", "url(images/rain1.GIF)") ;

  $(".walking-girl").attr("src", "");

  $("body").append("<h1 class='text'>She needs..👇</h1>");

  $("body").append("<img class='girl2' src='images/girl2.PNG'>");

  $(".girl2").css("animation","none");

  $("body").append("<img class='cloth' src='images/cloth.PNG'>");

  $("body").append("<img class='food' src='images/food.PNG'>");

  $("body").append("<img class='heat1' src='images/heat.PNG'>");

  $("body").append("<img class='bed' src='images/bed.PNG'>");

  rainfall.play();

  strong_wind.pause();
}

//  creator2 function will work when random number is 2.

function creator2(){

  $(".start").hide();

  glass_smash.play();

  guitar.pause();

  crying1.loop = true;

  crying1.play();

  setTimeout(function(){

  crying1.play();

},13000)

  $("img").remove();

  $(".black-cover").remove();

  $(".text").remove();

  $(".thankYou").remove();

  $("body").css("background-image", "url(images/rain1.GIF)") ;

  $("body").append("<img class='girl2' src='images/girl2.PNG'>");

  $("body").append("<img class='broken-glass' src='images/broken-glass.JPEG'>");

  $("body").append("<img class='vapour' src='images/vapour.PNG'>");

  $(".walking-girl").attr("src", "");

  let girlBounce =setInterval(doBounce($(".girl2"),10,'5px',300),5000);

  strong_wind.volume = 1;

  strong_wind.play();

  strongWind2.play();

  rainfall.play();
}

//  creator3 function will work when random number is 3.

function creator3(){

  $(".start").hide();

  crying1.loop = true;

  crying1.play();

  guitar.pause();

  waterFlow.volume= 1;

  waterFlow.play();

  $("img").remove();

  $(".text").remove();

  $(".thankYou").remove();

  $("body").css("background-image", "url(images/rain1.GIF)") ;

  $(".walking-girl").attr("src", "");

  $("body").append("<img class='broken-glass' src='images/broken-glass.JPEG'>");

  $("body").append("<img class='girl2' src='images/girl2.PNG'>");

  $(".girl2").css({"top":"250px","left":"0","animation":"none"});

  $("body").append("<div class='black-cover'></div>");

  strong_wind.volume = 0.2;

  strong_wind.play();

  strongWind2.play();

  rainfall.pause();
}

//  creator4 function will work when random number is 4.

function creator4(){

  $(".start").hide();

  crying1.loop = false;

  crying1.pause();

  guitar.pause();

  sound3.play();

  setTimeout(function(){

  impact1.volume = 1;

  impact1.play();

  },2000)

  $("img").remove();

  $(".black-cover").remove();

  $(".text").remove();

  $(".thankYou").remove();

  $("body").append("<img class='table' src='images/table.PNG'>");

  tableAppear($(".table"),'100px',1500);

  $("body").append("<img class='food2' src='images/food.PNG'>");

  foodDrop($(".food2"),'580px',2500);

  setTimeout(function(){

  impact2.play();

  $("body").append("<img class='heat2' src='images/heat.PNG'>");

  $(".heat2").css({"animation":"none","height":"350px","position":"absolute","top":"400px","left":"350px"});

},3000);

setTimeout(function(){

  $("body").append("<img class='eatingGirl' src='images/eatingGirl.PNG'>");

  nextImpact.play();

  guitar.volume = 0.5;

   guitar.play();

},4000);

  $("body").css("background-image", "url(images/rain1.GIF)") ;

  $(".walking-girl").attr("src", "");

  $(".girl2").attr("src"," ");

  crying1.pause();

  strong_wind.pause();

  strongWind2.pause();

  rainfall.pause();

}

//  creator5 function will work when random number is 5.

function creator5(){

  $(".start").hide();

  crying1.pause();

  guitar.pause();

  waterFlow.volume= 1;

  waterFlow.play();

  $("img").remove();

  $(".black-cover").remove();

  $(".text").remove();

  $(".thankYou").remove();

  $("body").css("background-image", "url(images/rain1.GIF)") ;

  $(".walking-girl").attr("src", "");

  $(".girl2").attr("src"," ")

  strong_wind.pause();

  strongWind2.pause();

  rainfall.pause();

  $("body").append("<img class='bed2' src='images/bed.PNG'>");

  $("body").append("<img class='girl3' src='images/girl3.PNG'>");

  sound3.play();

  foodDrop($(".bed2"),'450px',2000);

  setTimeout(function(){

    impact2.play();

    $(".girl3").css("visibility", "visible");

  },2000);

  setTimeout(function(){

    nextImpact.play();

    $("body").append("<img class='cloth2' src='images/cloth.PNG'>");

    foodDrop($(".cloth2"),'400px',2000);

  },3000)

}

//  creator6 function will work when random number is 6.

function creator6(){

  $(".start").hide();

  crying1.pause();

  guitar.pause();

  rainfall.pause();

  waterFlow.pause();

  strong_wind.pause();

  strongWind2.pause();

  $("img").remove();

  $(".black-cover").remove();

  $(".text").remove();

  $("body").css("background-image", "url(images/rain1.GIF)") ;

  $(".walking-girl").attr("src", "");

  $("body").append("<img src='images/smilingGirl.PNG' class='smilingGirl'>");

  $("body").append("<img src='images/fridge.PNG' class='fridge'>");

  $("body").append("<img src='images/stand.PNG' class='stand'>");

  $("body").append("<img src='images/flower.PNG' class='flower'>");

  $("body").append("<img src='images/sofa.PNG' class='sofa'>");

  setTimeout(function(){

    impact2.play();

      $(".sofa").css("visibility", "visible");

  },1000)

  setTimeout(function(){

    nextImpact.play();

      $(".fridge").css("visibility", "visible");

  },2000)


  setTimeout(function(){

    lastImpact.play();

      $(".stand").css("visibility", "visible");

  },3000)


  setTimeout(function(){

    gliterSound.play();

    $("body").append("<img src='images/gliter.PNG' class='gliter'>");

  },3500)

  setTimeout(function(){

    $("body").append("<img src='images/smilingGirl1.PNG' class='smilingGirl1'>")

  },3500)

  setTimeout(function(){

    sound3.play();

    setTimeout(function(){

      impact1.play();

    },1700)

    $(".flower").css("visibility", "visible");

    foodDrop($(".flower"),'410px',2000);

  },5000)

  setTimeout(function(){

    $(".smilingGirl1").remove();

    $(".smilingGirl").css("visibility", "visible");

  },6500)

  setTimeout(function(){

    applause.play();

  },6800)

  setTimeout(function(){

    $("body").append("<h1 class='thankYou'>Thank you for your help</h1>");

    guitar.play();

  },7000)

}

// doBounce function will animate the image.

function doBounce(element,times,distance,speed){
  for(i=0; i<times; i++){
    element.animate({marginTop:'-='+distance},speed)
            .animate({marginTop:'+='+distance},speed);
  }
}

//  foodDrop function will animate the image.

function foodDrop(element,distance,speed){
  element.animate({marginTop:'+='+distance},speed);

}

// tableAppear function will animate the image.

function tableAppear(element,distance,speed){
  element.animate({marginTop:'-='+ distance},speed);
}

// start funtion will work when page is start loading.

function start(){
  $("body").append("<h1 class='start'>Click anywhere to start</h1>")
}
