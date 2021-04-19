/* global , $ , alert , console  */

$(function () {
    'use strict';
    
    // header height
    var myheader = $('.header'),
        myslider = $('.slider')
    
    myheader.height($(window).height());
    
    
    $(window).resize(function() {
        myheader.height($(window).height());
        
       // adjusti bxslider list item center     
            myslider.each(function() {
                $(this).css('paddingTop', ($(window).height() - $('.slider li').height())/2);
            })
        
    });
    
    // links add active
    $('.links li a').click(function() {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
            // adjusti bxslider list item center
            myslider.each(function() {
                $(this).css('paddingTop', ($(window).height() - $('.slider li').height())/2);
            })
    
    // trigger the bxslider
    myslider.bxSlider({pager:false, speed:1000});
    
    // smooth scroll
    $('.links li a').click(function() {
        $('html, body').animate({scrollTop: $('#' + $(this).data('value')).offset().top}, 1000);
    })


// our auto
$(function autoSlider() {
    
    $('.sliderr .active').each(function () {
        if (!$(this).is(':last-Child')) {
            $(this).delay(4000).fadeOut(1000, function(){
            $(this).removeClass('active').next().addClass('active').fadeIn(); //fadeIn اظهار
                 autoSlider();
            });
        }else {
            $(this).delay(4000).fadeOut(1000, function() {
              $(this).removeClass('active');
                $('.sliderr div').eq(0).addClass('active').fadeIn();
                autoSlider();
            });
        }
    });
 });
  
  
   $(function() {  
    $("body").niceScroll(
    {cursorcolor: "#1abc7c",cursorborder: "1px solid #1abc7c"
    });
});
  
    
}());


















