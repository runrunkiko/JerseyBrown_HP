//ページトップボタン
$(function(){
  $("#page_top").on("click", function(){
    $("html, body").animate({scrollTop: 0 }, 600, "swing");
  });
});