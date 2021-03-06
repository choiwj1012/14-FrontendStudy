$(document).ready(function(){

  // 시간에 따라 시계 값 설정
  var timer = setInterval(function(){

    var now = new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    if(hr >= 10){
      hNum = hr;
    } else{
      hNum = "0"+hr;
    }

    if(min >= 10){
      mNum = min;
    } else {
      mNum = "0"+min;
    }

    if(sec >= 10){
      sNum = sec;
    } else {
      sNum = "0"+sec;
    }

    $("p span").eq(0).text(hNum);
    $("p span").eq(1).text(mNum);
    $("p span").eq(2).text(sNum);

  },1000);

  // 시간에 따라 테마 변경
  var now = new Date();
  var hr = now.getHours();

  if(hr >= 5 && hr < 11){

    $("#wrapper").removeClass();
    $("#wrapper").addClass("morning");
    $("nav li").removeClass();
    $("nav li").eq(0).addClass("on");

  } else if(hr >= 11 && hr < 16){

    $("#wrapper").removeClass();
    $("#wrapper").addClass("afternoon");
    $("nav li").removeClass();
    $("nav li").eq(1).addClass("on");

  } else if(hr >= 16 && hr < 20){

    $("#wrapper").removeClass();
    $("#wrapper").addClass("evening");
    $("nav li").removeClass();
    $("nav li").eq(2).addClass("on");

  } else if(hr >= 20 && hr < 5){

    $("#wrapper").removeClass();
    $("#wrapper").addClass("night");
    $("nav li").removeClass();
    $("nav li").eq(3).addClass("on");

  }

  // 버튼 클릭시 화면 테마 변경
  $("nav li").on("click", function(){

    var className = $(this).children("a").text();
    $("nav li").removeClass();
    $(this).addClass("on");
    $("#wrapper").removeClass();
    $("#wrapper").addClass(className);

  });

});
