
                 $(window).scroll(function (){
                 $(' .mov').each(function (){
                 var imagePos = $(this).offset().top;
                 var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                $(this).addClass('zoomIn');
            }
        });
    });