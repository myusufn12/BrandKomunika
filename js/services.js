$(".step").click(function () {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
  $("#line-progress").css("width", "0%");
  $(".creative").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
  $("#line-progress").css("width", "0%");
  $(".activation").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
  $("#line-progress").css("width", "0%");
  $(".production").addClass("active").siblings().removeClass("active");
});
