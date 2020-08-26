$(window).on("load", function () {
  "use strict";
  setTimeout(function () {
      $(".loader").fadeOut("slow");
  }, 1000);
});


$('#doctorCarousel').owlCarousel({
    loop:true,
    margin:35,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


$('#testimonialCarousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    items:1
});

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
        $('header').addClass('fixedHeader');
    }
    else {
        $('header').removeClass('fixedHeader');
    }
});

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 300)
        $('.scroll-top-arrow').fadeIn('slow');
    else
        $('.scroll-top-arrow').fadeOut('slow');
});


$(document).on('click', '.scroll-top-arrow', function () {
    $('html, body').animate({scrollTop: 0}, 500);
    return false;
});

if($("body").hasClass("intrective")){
    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top}, 800);
    });
    }
else {
    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 220}, 800);
    });
}


// create funMouse function 
function funMouse() {
    const canvas = document.querySelector(".js-canvas");
    const canvasContext = canvas.getContext("2d");
    let canvasWidth = (canvas.width = window.innerWidth);
    let canvasHeight = (canvas.height = window.innerHeight);
    let mouseX = canvasWidth / 2;
    let mouseY = canvasHeight / 2;
    let circle = {
      radius: 12,
      lastX: mouseX,
      lastY: mouseY
    };
  
    let miniCircle = {
      radius: 3,
      lastX: mouseX,
      lastY: mouseY
    };
    const elements = [...document.querySelectorAll("a")];
    var resizeCanvas = function resizeCanvas() {
      canvasWidth = canvas.width = window.innerWidth;
      canvasHeight = canvas.height = window.innerHeight;
    };
    var mouseRender = function mouseRender() {
      canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
      circle.lastX = lerp(circle.lastX, mouseX, 0.5);
      circle.lastY = lerp(circle.lastY, mouseY, 0.5);
      
      miniCircle.lastX = lerp(miniCircle.lastX, mouseX, 0.1);
      miniCircle.lastY = lerp(miniCircle.lastY, mouseY, 0.1);
      canvasContext.beginPath();
      canvasContext.arc(
        circle.lastX,
        circle.lastY,
        circle.radius,
        0,
        Math.PI * 2,
        false
      );
      canvasContext.lineWidth = 2;
      canvasContext.strokeStyle = "#3b7dc1";
      canvasContext.stroke();
      canvasContext.closePath();
      canvasContext.beginPath();
      canvasContext.arc(
        miniCircle.lastX,
        miniCircle.lastY,
        miniCircle.radius,
        0,
        Math.PI * 2,
        false
      );
      canvasContext.fillStyle = "#3b7dc1";
      canvasContext.fill();
      canvasContext.closePath();
      requestAnimationFrame(mouseRender);
    };
    var mouseInit = function mouseInit() {
      requestAnimationFrame(mouseRender);
      window.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
      window.addEventListener("resize", resizeCanvas, false);
      function on() {
        canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
        canvasContext.beginPath();
        canvasContext.arc(
          circle.lastX,
          circle.lastY,
          circle.radius,
          0,
          Math.PI * 2,
          false
        );
        canvasContext.lineWidth = 3;
        canvasContext.strokeStyle = "#EA2F72";
        canvasContext.stroke();
        canvasContext.closePath();
  
        requestAnimationFrame(on);
      }
      function off() {
        canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
        canvasContext.beginPath();
        canvasContext.arc(
          circle.lastX,
          circle.lastY,
          circle.radius,
          0,
          Math.PI * 2,
          false
        );
        canvasContext.lineWidth = 2;
        canvasContext.strokeStyle = "#3b7dc1";
        canvasContext.stroke();
        canvasContext.closePath();
  
        canvasContext.beginPath();
        canvasContext.arc(
          miniCircle.lastX,
          miniCircle.lastY,
          miniCircle.radius,
          0,
          Math.PI * 2,
          false
        );
        canvasContext.fillStyle = "#3b7dc1";
        canvasContext.fill();
        canvasContext.closePath();
  
        requestAnimationFrame(off);
      }
      let tween = TweenMax.to(circle, 0.25, {
        radius: circle.radius * 2.5,
        ease: Power1.easeInOut,
        paused: true
      });
      elements.forEach((el) => {
        el.addEventListener( "mouseenter", () => { on(); }, false );
        el.addEventListener( "mouseleave", () => { off(); }, false );
        el.addEventListener( "mouseenter", () => { tween.play(); }, false );
        el.addEventListener( "mouseleave", () => { tween.reverse(); }, false );
      });
    };
    var lerp = function lerp(a, b, n) {
      return (1 - n) * a + n * b;
    };
    mouseInit();
  }
  funMouse();
  