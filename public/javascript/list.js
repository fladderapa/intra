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
    $('.item2').click(function (){
  $('.wrapper2').addClass('active');
  $('.item2').removeClass('active').removeClass('margin');
  $('.close2').fadeOut(300);
  $(this).addClass('active').addClass('margin');
  $('.close2', this).delay(300).fadeIn(300);
});

  $('.close2').click(function (event){
  event.stopPropagation();
  $('.wrapper2').removeClass('active');
  $('.item2').removeClass('active').removeClass('margin');
  $('.close2').fadeOut(300);
});

$('.close').click(function (event){
  event.stopPropagation();
  $('.wrapper').removeClass('active');
  $('.item').removeClass('active').removeClass('margin');
  $('.close').fadeOut(300);
});

});
