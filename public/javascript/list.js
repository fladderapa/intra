/**
 * Created by alexander on 2015-01-27.
 */
$(document).ready( function (){
    $('.item').click(function (){
  $('.wrapper').addClass('active');
  $('.item').removeClass('active').removeClass('margin');
  $('.close').fadeOut(300);
  $(this).addClass('active').addClass('margin');
  $('.close', this).delay(300).fadeIn(300);
});

$('.close').click(function (event){
  event.stopPropagation();
  $('.wrapper').removeClass('active');
  $('.item').removeClass('active').removeClass('margin');
  $('.close').fadeOut(300);
});

});
