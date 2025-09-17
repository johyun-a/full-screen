$(function () {
  let con01 = $("#con01").offset().top;
  let con02 = $("#con02").offset().top;
  let con03 = $("#con03").offset().top;
  let con04 = $("#con04").offset().top;
  console.log(con01, con02, con03, con04);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    console.log(scroll);

    if (scroll >= con02) {
      $("header").addClass("on");
    }
    if (scroll >= con01 && scroll < con02) {
      //   console.log("con01입니다");
      $("#navi li").removeClass("on");
      $("#navi li").eq(0).addClass("on");
    } else if (scroll >= con02 && scroll < con03) {
      //   console.log("con02입니다");
      $("#navi li").removeClass("on");
      $("#navi li").eq(1).addClass("on");
      $("#con02").addClass("on");
    } else if (scroll >= con03 && scroll < con04) {
      //   console.log("con03입니다");
      $("#navi li").removeClass("on");
      $("#navi li").eq(2).addClass("on");
      $("#con03").addClass("on");
    } else {
      //   console.log("con04입니다");
      $("#navi li").removeClass("on");
      $("#navi li").eq(3).addClass("on");
    }
  });

  $("header li").on("click", function () {
    let i = $(this).index();
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let target = $("section").eq(i).offset().top;
    // console.log(target);
    $("html, body").animate({ scrollTop: target });
  });
  $("#navi li").on("click", function () {
    let i = $(this).index();
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let target = $("section").eq(i).offset().top;
    // console.log(target);
    $("html, body").animate({ scrollTop: target });
  });
  function navi() {
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let target = $("section").eq(i).offset().top;
    // console.log(target);
    $("html, body").animate({ scrollTop: target });
  }
  $("#con02 li img").on("mouseenter", function () {
    $(this).stop().animate({ "border-bottom-right-radius": "50%" });
  });
  $("#con02 li img").on("mouseleave", function () {
    $(this).stop().animate({ "border-radius": "0" });
  });
  let i = $("#con01 img");
  $("#con01 img").fadeOut();
  $("#con01 img").eq(i).fadeIn();
});
// if (scroll >= con01 && scroll < con02) {

// } else if (scroll >= con02 && scroll < con03) {

// } else if (scroll >= con03 && scroll < con04) {
// }
// 순서대로 스크롤이 1페이지 2페이지 3페이지에 각각 있다는 뜻
