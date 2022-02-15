$(window).on("load",function(){

    let window_scroll_top = $(window).scrollTop()
    let top_text          = $(".top-text .inner")
    let bottom_text       = $(".bottom-text")
    let parent_div        = $(".parent")

    $(window).scroll(function(){
        window_scroll_top = $(window).scrollTop()

        // TweenLite.to(top_text, 1, {x: window_scroll_top/10})
        TweenLite.to(top_text, 1, {y: window_scroll_top/10})
        // TweenLite.to(bottom_text, 1, {x: window_scroll_top/10})
        TweenLite.to(bottom_text, 1, {y: window_scroll_top/10})

        // if ( window_scroll_top > parent_div.offset().top -300 && !parent_div.hasClass("active") ){
           
        //     parent_div.stop().animate({width: "80%"},1000)
        //     parent_div.addClass("active")
            
        // }
        // if (window_scroll_top < parent_div.offset().top-300){
        //     parent_div.removeClass("active")
        //     parent_div.stop().animate({width: "40%"},1000)
        // }

    }) //window scroll end

})

