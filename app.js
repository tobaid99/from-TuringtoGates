$("img").click(function() {
    var img2 = $(this).attr('alt-pic');
    $(this).hide();
    $(this).before($(`img[src='${img2}']`).show())
    
    
});