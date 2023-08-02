$("ul.target li").on('click',function(){
    $('ul.target li').removeClass('active');
    $(this).addClass('active');
    $("div.blog div.info").css("display",'none');
    $("div.blog div[data-target='"+$(this).data('target')+"']").css("display",'contents');
});
$('.ir-arriba').click(function(){
    $('body,html').animate({ scrollTop:'0px' },1000);
});
$(window).scroll(function(){
    if($(this).scrollTop() > 0){
        $('.ir-arriba').slideDown(1500);
    }else{
        $('.ir-arriba').slideUp(1500);
    }
});
$('.ir-abajo').click(function(){
    $('body,html').animate({ scrollTop:'1000px' },1000);
});