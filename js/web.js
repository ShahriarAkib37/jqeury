




$(function(){

    // navBar   //

    let navbar = $('.navbar')

    $(window).scroll(function(){
        let scrTop  = $(window).scrollTop()
       
        if(scrTop > 200){
            navbar.addClass('fixed')
        } else{
            navbar.removeClass('fixed')
        }
    })


    // navBar end  //







    // FAQ  //

    let faq = $('#faqWrapper .faq')

    faq.click(function () {

        
         if($(this).hasClass('active')){
            $(this).removeClass("active");
         } else{

             faq.removeClass('active')
             $(this).addClass('active')
         }


    });

    // FAQ   end//
    


    // preLoader  //


    let preLoader = $('.preLoader')
    $(window).on('load',function(){
        preLoader.fadeOut(200)
    })

    // preLoader end  //


})


