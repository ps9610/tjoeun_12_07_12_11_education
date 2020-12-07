;(function($, window, document){

    $("#main").on("mousemove", function(event){
        $(".img-wrap").css({top:event.clientY, left:event.clientX})
        $(this).css({backgroundPosition: -event.clientX*0.1+"px " + -event.clientY*0.1+"px"})
    })

})(jQuery, window, document);