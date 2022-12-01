$(document).ready(function () {
    setInterval(starAnimate, 235);
    setInterval(placeStar, 60);
});

var starcount = 0;

function starAnimate() {
    $('.star').each(function () {
        starFrame = $(this).attr('class');
        starFrame = starFrame.split(' ');
        starFrame = starFrame[1].split('-');
        starFrame = parseInt(starFrame[1]);

        if (starFrame >= 7) {
            $(this).remove();
            starcount--;
        }

        $(this).removeClass("frame-" + String(starFrame)).addClass("frame-" + String(parseInt(starFrame) + 1));
        
    })
}


function placeStar() {
    var newStar = $("<div class='star frame-1'><div class='dot dot-1'></div><div class='dot dot-2'></div><div class='dot dot-3'></div><div class='dot dot-4'></div><div class='dot dot-5'></div><div class='dot dot-6'></div><div class='dot dot-7'></div><div class='dot dot-8'></div><div class='dot dot-9'></div></div>");
    newStar.css({
        top: Math.floor(Math.random() * $(window).height()),
        left: Math.floor(Math.random() * $(window).width())
    });
    if (starcount < 30) {
        $('.bg').append(newStar);
        starcount++;
    }
}
