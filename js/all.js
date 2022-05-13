$(document).ready(function () {
  $(".fa-bars").click(function (e) { 
    console.log("click");
    $(".menu").toggleClass("toggle");
  });
  $("body").click(function (e) { 
    if (!$(e.target).hasClass("fa-bars")) {
      $(".menu").removeClass("toggle");;
    }
  });  
});