$(document).ready(function() {

  //IE9 custom scrollbar gradient
  setTimeout(function() {
    $('.scroll-bar.vertical').addClass('gradient');
  }, 300);

  //Tabs

  var scrollbarFlag = true;
  
  $('.j-tabs li').click(function() {

    var dataTab = $(this).data('tab');

    $('.j-tabs li').removeClass('active');
    $(this).addClass('active');
    $('.main-area').addClass('hidden');
    $('.'+dataTab).removeClass('hidden');

    if (scrollbarFlag) {
      scrollbarShow();
    }

    $('.statistics.j-scrolbar').customScrollbar();

    if (dataTab == "users") {
      $('.j-wrap').removeClass('right-tab-active').addClass('left-tab-active');
    } else {
      $('.j-wrap').removeClass('left-tab-active').addClass('right-tab-active');
    }

  });

  //Reinicializate scrollbar
  function scrollbarShow() {
    $('.j-statistics').customScrollbar();
    scrollbarFlag = false;
  } 

  //Custom scrollbar
  $('.j-scrolbar').customScrollbar();

  //Custom select
  $(".j-select").select2();

  //Custom checkbox
  $('.j-checkbox').iCheck({
    checkboxClass: 'icheckbox_minimal',
    radioClass: 'iradio_minimal'
  });
});
