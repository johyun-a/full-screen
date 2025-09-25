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
  $("#con01 li a")
    .stop()
    .animate({ top: "-80px" }, 500, function () {
      $(this).animate({ top: "80px" }, 500);
    });
  $("#con01 li").on("click", function () {
    $("html").animate({ scrollTop: con02 });
  });
  // $("#con03 h2").on("click", function () {
  //   let $txt = $(this).next(".txt"); // h2 다음 .txt
  //   let $video = $txt.find("video"); // 그 안의 video
  //   let vid = $video.get(0);

  //   $(this).hide(); // h2 숨기기
  //   $txt.addClass("on"); // .txt 보이게 (CSS transition 발동)
  //   $video.show(); // 비디오 보이기
  //   vid.currentTime = 0; // 처음부터 재생
  //   vid.play();
  // });==> 안됨
  $("#con04 ul").on("mouseenter", function () {
    $(this).css({ height: "100px" });
  });
  $("#con04 ul").on("mouseleave", function () {
    $(this).css({ height: "50px" });
  });
});
// if (scroll >= con01 && scroll < con02) {

// } else if (scroll >= con02 && scroll < con03) {

// } else if (scroll >= con03 && scroll < con04) {
// }
// 순서대로 스크롤이 1페이지 2페이지 3페이지에 각각 있다는 뜻
