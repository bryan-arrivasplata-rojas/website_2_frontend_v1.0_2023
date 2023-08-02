$("ul.target li").on('click',function(){
    $('ul.target li').removeClass('active');
    $(this).addClass('active');
    $("div.blog div.info").css("display",'none');
    $("div.blog div[data-target='"+$(this).data('target')+"']").css("display",'contents');
});