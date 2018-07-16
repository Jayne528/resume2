$(document).ready(function () {
    //---nav fixed---//
    onscroll = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
         if (scrollTop > 975) {
             $('nav,.portfolio,.skill,.profile,.experience').addClass('fixed');
         }
         else 
             $('nav,.portfolio,.skill,.profile,.experience').removeClass('fixed');
        }
        
    //---home---//    
    $('.home').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:0},800);
    });
    $('.downarrow').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:975},800);
    });

//--- 效果---//
    $('.li_hover').hover(function (e) { 
        e.preventDefault();
        $(this).find('.icon').toggleClass('shake');  
    });
    $('.chart_WebSeries').hover(function (e) { 
        e.preventDefault();
        $(this).find('li').toggleClass('action');  
    });
    $('.chart-OfficeSeries').hover(function (e) { 
        e.preventDefault();
        $(this).find('li').toggleClass('action1');  
    });
    });

