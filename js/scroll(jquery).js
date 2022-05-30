// menu 섹션에 맞게 색상 변경
function scrollHandler() {
  // skill영역으로 올때 작동
  if($(window).scrollTop() >= $('.myInfo-skills').position().top) {
    // about 퍼센트 애니메이션 처리
    $('.stack').each(function() {
      let skill = $(this);
      let percentage = skill.find('.percentage').text();
      skill.find('.inner-bar').animate({width: percentage},1200);
    })
  }
}

// window scroll event
$(window).on('scroll', scrollHandler);
// 처음 로딩 됐을때도 호출
scrollHandler();