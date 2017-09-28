
$(document).ready(function() {
  $('.game__box-tab-box-item').on('click', function(event) {

    event.preventDefault();

    var $tabId = $(this).attr('href');
    $('.game__box-content-tab').removeClass('game__box-content-tab--active');
    $($tabId).addClass('game__box-content-tab--active');

  });

  //star raiting

  $(function () {

  $("#rateYo").rateYo({
    rating: 4.0,
    starWidth: "20px",
    spacing: "8px"
    });
  });

  // circli rpogres barW

  $("#divProgress").circularloader({
    backgroundColor: "#1d2031",//background colour of inner circle
    fontColor: "#fff",//font color of progress text
    fontSize: "27px",//font size of progress text
    radius: 43,//radius of circle
    progressBarBackground: "#aaaaaa",//background colour of circular progress Bar
    progressBarColor: "#34e885",//colour of circular progress bar
    progressBarWidth: 3,//progress bar width
    progressPercent: 78,//progress percentage out of 100
    progressValue: 78,//diplay this value instead of percentage
    showText: true,//show progress text or not
    title: false,//show header title for the progress bar
  });
});
