$(document).ready(function(){
  initSlick();

  /* system btn */
  $( ".system-btn" ).click(function() {
    $('.system-page').toggleClass('visible');
    $('.system-page-image').toggleClass('visible');
    $('.personalCenter-btn').toggleClass('unvisible');
  });
  $(".slider").rangeslider();

  /* dropdown menu */
  $('.dropdown').click(function () {     
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
  });
  $('.dropdown').focusout(function () {
      $(this).removeClass('active');
      $(this).find('.dropdown-menu').slideUp(300);
  });
  $('.dropdown .dropdown-menu li').click(function () {
      $(this).parents('.dropdown').find('span').text($(this).text());
      $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
  });
  $('.dropdown-menu li').click(function () {
      var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
      $('.msg').html(msg + input + '</span>');
  }); 

  $('.personalCenter-btn').click(function () {
    console.log('click')
    window.location.href="admin.html"
  })
});

function initSlick(){
  let ratio = window.innerWidth / window.innerHeight; 
  if(ratio >= 1){ 
    $('.game-menu-slider').css({ 'top' : '58%', 'transform' : 'translate(-50%, -58%)' });
    
    if(ratio > (1334/750))
      $('.main-background').addClass('h-100');
    else
      $('.main-background').addClass('w-100');
    
    $('.main-background').attr("src","./assets/dist/images/lobby/landscape/bg_landscape.png");
    $('.nav-bar').attr("src","./assets/dist/images/lobby/landscape/bg_landscape_top.png");
    $(".game-menu-slider").slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll:5,     
      // mobileFirst:true,   
    });
  }
  else{
    if(ratio > (1334/750))
      $('.main-background').addClass('h-100');
    else
      $('.main-background').addClass('w-100');

    $('.main-background').attr("src","./assets/dist/images/lobby/portrait/bg_portrait.png");
    $('.nav-bar').attr("src","./assets/dist/images/lobby/portrait/bg_portrait_top.png");
    $(".game-menu-slider").slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      vertical: true,
      verticalSwiping: true,
      // mobileFirst:true,   
    });
  }

  $('.main-background').load(function() {
    let ratio = window.innerWidth / window.innerHeight; 
    $('.nav-bar').css({ 'width' : $('.main-background').width() + 'px' });
    
    if(ratio >= 1){ 
      $('.personal-box-image').css({ 'width' :  ($('.nav-bar').width() * 0.33) + 'px' });
      if(window.innerWidth < 1000){
        $('.game-item').css({ 'margin' : '8px 15px 8px' });
        $('.game-selected-frame-top').css({ 'margin' : '8px 15px 8px' });        
        $('.game-selected-frame-bottom').css({ 'margin' : '8px 15px 8px' });        
        $('.system-page-image').css({ 'width' : window.innerWidth*0.25 + 'px' });
        $('.system-volume-icon').css({ 'width' : ($('.system-page-image').width()*0.212) + 'px' });
        $('.system-language-icon').css({ 'width' : ($('.system-page-image').width()*0.69) + 'px' });
        $('.range-slider>input').css({ 'width' :($('.system-page-image').width()*0.9) + 'px' });
        $('.dropdown').css({ 'width' : ($('.system-page-image').width()*0.69) + 'px' });
        $('.dropdown .dropdown-menu').css({ 'width' : ($('.system-page-image').width()*0.69) + 'px' });
      }

      /** system btn */
      let systemBtnWidth = $('.nav-bar').width() * 0.047;
      $('.system-btn-image').css({ 'width' : systemBtnWidth + 'px' });
      /** personalCenter btn */
      $('.personalCenter-btn-image').css({ 'width' : systemBtnWidth + 'px' });
      $('.personalCenter-btn-image').css({ 'height' : systemBtnWidth + 'px' });

      // let fontSize = window.innerWidth > 900 ? 24 : 12;
      let innerMin = window.innerHeight > 628 && window.innerHeight > 750 ? 32 : 16;
      let innerHeight = window.innerHeight > 570 ? innerMin : 16;
      let fontSize = window.innerWidth > 900 ? innerHeight : 16;

      /** name & property */   
      let ptlwm = window.innerWidth > 1334 ? 0.2 : 0.16;
      let atlwm = window.innerWidth > 1334 ? 0.63 : 0.58;
      let ptm = ratio > (1334/750) ? 0.18 : ptlwm;
      let atm = ratio > (1334/750) ? 0.6 : atlwm;
      let propertyTop =  $(".personal-box-image").height() * ptm;
      let propertyLeft = $(".personal-box-image").width() * 0.27;
      let accountTop = $(".personal-box-image").height() * atm;
      let personalBoxLeft = (window.innerWidth - $('.nav-bar').width()) / 2;

      if(ratio > (1334/750)){        
        let sbt = $('.system-btn').position().top;
        $('.system-btn').css({ 'right' : (personalBoxLeft + sbt) + 'px' });

        $('.personalCenter-btn').css({ 'right' : (personalBoxLeft + (sbt * 9)) + 'px' });

        $('.personal-box').css({ 'left' : personalBoxLeft + 'px', 'top' : '2.5px' });
        $(".game-menu-slider").css({ 'width' : ($('.main-background').width() * 0.9) + 'px' });      
        $(".personal-property").css({ 'top' : propertyTop + 'px', 'left' : propertyLeft + 'px', 'font-size' : fontSize + 'px' });
        $(".personal-account").css({ 'top' : accountTop + 'px', 'left' : propertyLeft + 'px', 'font-size' : fontSize + 'px' });
      }
      else{
        $(".personal-property").css({ 'top' : propertyTop + 'px', 'left' : propertyLeft + 'px' });
        $(".personal-account").css({ 'top' : accountTop + 'px', 'left' : propertyLeft + 'px' });
      }

      /** nav ad */
      let navHeight = $('.nav-bar').height();
      $('.nav-ad').addClass('show');      
      $('.nav-ad-image').css({ 'height' : navHeight + 'px' })
      let navLeft = ( personalBoxLeft + $('.personal-box').width() + 5 );
      $('.nav-ad').css({ 'left' : navLeft + 'px' });

      /** footer */
      $('.footer').addClass('show');
      let footerWidth = $('.nav-bar').width();
      $('.footer-background').css({ 'width' : footerWidth + 'px' })
      $('.footer-marquee-background').css({ 'width' : ($('.footer-background').width() * 0.6) + 'px' })

      setTimeout(() => {
        $('.game-item').css({ 'width' : '-webkit-fill-available' });
        let game_item_height = $('.game-item').width();        
        $('.game-item').css({ 'height' : (game_item_height*1.05) + 'px' });
        $('.game-selected-frame-top').css({ 'height' : (game_item_height*1.05) + 'px' });
        $('.game-selected-frame-bottom').css({ 'height' : (game_item_height*1.05) + 'px' });
      }, 500);  

      /** footer marquee */
      let marqueeWidth = $('.footer-marquee-background').width();     
      let marqueeFontSize = window.innerWidth < 900? 10 : window.innerWidth * 0.0034 + 13.48;
      
      // let marqueeTop =  ratio > (1334/750) ? 97 : Math.abs((((1334/750)-ratio)*2.67) - 0.28) + 97;
      let marqueeMiddle = window.innerHeight < 572 ? 98 : 97;
      let marqueeTop =  ratio > (1334/750) ? marqueeMiddle : Math.abs((((1334/750)-ratio)*2.67) - 0.28) + 97;

      if($('.marquee-box'))

      if(window.innerWidth < 900){
        /** dot */       
        $('.slick-dots li').addClass('slick-dots-l');
        $('.slick-dots li button').addClass('slick-dots-l');
        $('.slick-dots').css({'bottom' : '-25px'})
        marqueeTop = 98.2;
        $('.marquee-box').css({ 'height' :'18px' });
      }
      
      $('.marquee').css({ 'width' : (marqueeWidth*0.95) + 'px', 'left' : '50%', 'top' : marqueeTop + '%', 'transform' : 'translate(-50%, -97%)', 'font-size' :  marqueeFontSize + 'px' });
    }
    else{
      let zoomRatio = 0.6;    
      $('.game-item-box').css({ 'flex-direction' : 'row' });
      let game_item_margin =  window.innerWidth / (750 / 25);
      $('.game-item').css({ 'margin' : game_item_margin + 'px' });
      $('.game-selected-frame-top').css({ 'margin' : game_item_margin + 'px' });
      $('.game-selected-frame-bottom').css({ 'margin' : game_item_margin + 'px' });
      let game_item_width;
      if(ratio > zoomRatio){
        let zoomGap = (ratio - zoomRatio) * 888.8;
        game_item_width = ((window.innerWidth - (game_item_margin*4)/** margin */ - (window.innerWidth/5)/** left bar width */) / 2) - zoomGap;      
      }
      else{
        game_item_width = (window.innerWidth - (game_item_margin*4)/** margin */ - (window.innerWidth/5)/** left bar width */) / 2; 
      }
      $('.game-item').css({ 'width' : game_item_width + 'px', 'height' : game_item_width + 'px' });   
      $('.game-selected-frame-top').css({ 'width' : game_item_width + 'px', 'height' : game_item_width + 'px' });   
      $('.game-selected-frame-bottom').css({ 'width' : game_item_width + 'px', 'height' : game_item_width + 'px' });   
      
      /** dot */
      $('.slick-dots').addClass('slick-dots-box');    
      $('.slick-dots li').addClass('slick-dots-v');
      $('.slick-dots li button').addClass('slick-dots-v');

      /** .vertical-tab img */
      $('.vertical-tab').addClass('vertical-tab_show');
      let vertical_tab_height = $('.main-background').height() * 0.8;      
      let vertical_tab_bottom = (window.innerHeight - $('.main-background').height()) /2;
      $('.vertical-tab_show').css({ 'height' : vertical_tab_height + 'px', 'width' : window.innerWidth/7 + 'px', 'bottom' : vertical_tab_bottom + 'px' });

      $('.footer-ad').addClass('footer-ad-show');
      $('.footer-ad').css({ 'width' : $('.main-background').width()  + 'px', 'bottom' : vertical_tab_bottom + 'px' });  
      
      $('.personal-box-image').css({ 'width' :  ($('.nav-bar').width() * 0.62) + 'px' });
        
      /** name & property */  
      let ptm = window.innerWidth > 500 ? 0.18 : 0.16;
      let atm = window.innerWidth > 500 ? 0.62 : 0.58;
      let propertyTop =  $(".personal-box-image").height() * ptm;
      let propertyLeft = $(".personal-box-image").width() * 0.27;
      let accountTop = $(".personal-box-image").height() * atm;

      if(window.innerWidth > 500){       
        $(".personal-property").css({ 'top' : propertyTop + 'px', 'left' : propertyLeft + 'px' });
        $(".personal-account").css({ 'top' : accountTop + 'px', 'left' : propertyLeft + 'px' });
      }
      else{     
        $(".personal-property").css({ 'top' : propertyTop + 'px', 'left' : propertyLeft + 'px', 'font-size' : '12px' });
        $(".personal-account").css({ 'top' : accountTop + 'px', 'left' : propertyLeft + 'px', 'font-size' : '12px' });
      }

      /** system btn */
      let systemBtnWidth = $('.nav-bar').width() * 0.097;
      $('.system-btn-image').css({ 'width' : systemBtnWidth + 'px' });
      $('.personalCenter-btn-image').css({ 'width' : systemBtnWidth + 'px' });

      setTimeout(() => {
         /** nav marquee */
        $('.nav-marquee').addClass('show');
        $('.nav-marquee-background').css({ 'width' : ($('.nav-bar').width() * 0.9) + 'px' });
        let navMarqueeLeft = ($('.nav-bar').width() - $('.nav-marquee-background').width()) / 2;

        setTimeout(() => {
          let navMarqueeBottom = ($('.nav-bar').height() * 0.333) -  ($('.nav-marquee-background').height() / 1.75);
          $('.nav-marquee').css({ 'left' : navMarqueeLeft + 'px', 'bottom' : (-navMarqueeBottom) + 'px' });        
        }, 200);

        setTimeout(() => {
        /** marquee */
        let marqueeWidth = $('.nav-marquee-background').width();     
        let marqueeFontSize = window.innerWidth < 500? 10 : 20;
        let marqueeTop = $('.nav-bar').height();     
        let navMarqueeGap =  window.innerWidth < 500? 0.89 : 1.11;
        $('.marquee').css({ 'width' : (marqueeWidth*0.95) + 'px', 'left' : '50%', 'top' : marqueeTop + 'px', 'transform' : 'translate(-50%,' + (-$('.nav-marquee').height()*navMarqueeGap) + 'px)', 'font-size' :  marqueeFontSize + 'px' });
          }, 300);
      }, 400);
    }

    /** system page */
    let systemPageTop = $('.system-btn').position().top;
    let systemPageRight = $('.system-btn').css('right');
    $('.system-page').css({ 'top' : systemPageTop + 'px', 'right' : systemPageRight, 'display' : 'block' });


    $('.game-item').click(function() {
      console.log(this)
    });
  });
}

function gameItemHover(e){  
  let parent = e.parentNode;
  $(parent).children().eq(1).css("opacity","1");
}

function gameItemDefaultState(e){
  let parent = e.parentNode;
  $(parent).children().eq(1).css("opacity","0");
}

$(window).on('load', function(){  
  setTimeout(removeLoader, 600);
});

function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {      
      $( "#loadingDiv" ).remove(); 
  });  
}

// $(window).resize(function() {   
//   $('.reload-page').css({ 'display' : 'flex' }); 
// });

$(window).bind('resize', function(e) {
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    window.location.reload(true);
  }, 100);
});

window.onorientationchange = function() {  
  window.location.reload();
}

/** volume slider */
$.fn.rangeslider = function(options) {
  var obj = this;
  var defautValue = obj.attr("value");
  obj.wrap("<span class='range-slider'></span>");
  obj.after("<span class='slider-container'><span class='bar'><span></span></span><span class='bar-btn'></span></span>");
  obj.attr("oninput", "updateSlider(this)");
  updateSlider(this);
  return obj;
};

function updateSlider(passObj) {
  var obj = $(passObj);
  var value = obj.val();
  var min = obj.attr("min");
  var max = obj.attr("max");
  var range = Math.round(max - min);
  var percentage = Math.round((value - min) * 100 / range);
  var nextObj = obj.next();
  nextObj.find("span.bar-btn").css("left", percentage + "%");
  nextObj.find("span.bar > span").css("width", percentage + "%");  
};


function updateVolume(val) {
  console.log("[Volume]: " + val);
}