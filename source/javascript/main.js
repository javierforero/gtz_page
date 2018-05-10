// import $ from 'jquery';

$(document).ready(function(){

  $('#mobile-icon').click(function(){
    $(this).toggleClass('open');
    $('.mobile-drawer').toggleClass('mobile-drawer__slide');
    $('.mobile-drawer-menu li').toggleClass('mobile-drawer__fade');
  });

  $('.menu-link').click(function(e){

    var nameId = e.target.attributes['data-id'].value;
    var mobile = e.target.attributes['data-mobile'].value;
    switch(nameId) {
      case 'about':
        $('html,body').animate({
          scrollTop: ($('#about').offset().top - $('.header').outerHeight())
         }, 600);
            break;  
      case 'illinois':
            $('html,body').animate({
              scrollTop: ($('#illinois').offset().top - $('.header').outerHeight())
            }, 600);
            break;      
      case 'involved':
           $('html,body').animate({
             scrollTop: ($('#involved').offset().top - $('.header').outerHeight())
            }, 600);
            break;     
      case 'partners':
           $('html,body').animate({
             scrollTop: ($('#partners').offset().top - $('.header').outerHeight())
           }, 600);
            break;                 
    }
    if(mobile === "true") {
      $('#mobile-icon').toggleClass('open');
      $('.mobile-drawer').toggleClass('mobile-drawer__slide');
      $('.mobile-drawer-menu li').toggleClass('mobile-drawer__fade');
    }

  })

});
