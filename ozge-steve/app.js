$(document).ready(function(){
  console.log('jQuery ready!');
  $('.icon-menu').click(function(){
    console.log('Detected click!')
    $('.main-nav').slideToggle('slow');
  });
});
