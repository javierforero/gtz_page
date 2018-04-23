import $ from 'jquery';
import Swiper from 'swiper/dist/js/swiper.min';
import 'whatwg-fetch';


const sendInvitation = (email) => {
  var url = 'https://api.amper.xyz/auth/beta_signup/';
  var data = {email: email};
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
  }).then(response => {
    console.log(response.status);
    console.log(response.statusText);
  }, error => {
    console.log(error.message);
  });
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target.elements);
  sendInvitation(e.target.elements[0].value);
  document.getElementById("try_email").value = "";
  return false;
}

$(document).ready(function(){

  $('#ham-menu').click(function(){
    $(this).toggleClass('open');
    $('#mobile__nav').slideToggle('300');
  });

  $('#zoom').click(() => {
    $('.modal-content').addClass('show');
  });

  $('#modal').click(() => {
    $('.modal-content').removeClass('show');
  });


  let mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.section__leading-manufactorers__arrow-right',
      prevEl: '.section__leading-manufactorers__arrow-left',
    }
  })
  
  // var form = document.querySelector('form');
  // if (form.attachEvent) {
  //   form.attachEvent('submit', handleSubmit);
  // } else {
  //   form.addEventListener('submit', handleSubmit);
  // }

});
