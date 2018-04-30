import $ from 'jquery';

$(document).ready(function(){

  $('#mobile-icon').click(function(){
    $(this).toggleClass('open');
    $('.mobile-drawer').toggleClass('mobile-drawer__slide');
    $('.mobile-drawer-menu li').toggleClass('mobile-drawer__fade');
  });

});
