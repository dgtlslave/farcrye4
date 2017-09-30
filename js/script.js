
$(document).ready(function() {
  $('.game__box-tab-box-item').on('click', function(event) {

    event.preventDefault();

    var $tabId = $(this).attr('href');
    $('.game__box-content-tab').removeClass('game__box-content-tab--active');
    $($tabId).addClass('game__box-content-tab--active');

  });

  //star raiting

  $(function () {

  $(".game__box-content-rating").rateYo({
    rating: 4.0,
    starWidth: "20px",
    spacing: "8px"
    });
  });

  // circle prpogres bar


});

$(window).on('load', function(){
  $(".game__box-content-circle").each(function(){
    var rad = $(this).data('radius');

    $(this).circularloader({
      backgroundColor: "#1d2031",//background colour of inner circle
      fontColor: "#fff",//font color of progress text
      fontSize: "27px",//font size of progress text
      radius: 43,//radius of circle
      progressBarBackground: "#aaaaaa",//background colour of circular progress Bar
      progressBarColor: "#34e885",//colour of circular progress bar
      progressBarWidth: 3,//progress bar width
      progressPercent: rad,//progress percentage out of 100
      progressValue: rad,//diplay this value instead of percentage
      showText: true,//show progress text or not
      title: false,//show header title for the progress bar
    });
  });
});
