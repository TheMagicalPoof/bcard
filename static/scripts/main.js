$(document).ready(function () {
    setInterval(animateStars2, 250);
    setInterval(animateStars, 150);
    setInterval(placeStar, 60);
});


function animateStars() {

    $(".speed-1").each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - 10) });
    });
    $(".speed-2").each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - 20) });
    });
    $(".speed-3").each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - 30) });
    });
    $(".speed-4").each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - 40) });
    });

    $('.star').each(function () {
        thisFrame = $(this).attr('class');
        thisFrame = thisFrame.split(' ');
        thisFrame = thisFrame[1].split('-');
        thisFrame = parseInt(thisFrame[1]);
        secFrame = $(this).attr('class');
        secFrame = secFrame.split(' ');
        secFrame = secFrame[2].split('-');
        secFrame = parseInt(secFrame[1]);
        thiFrame = $(this).attr('class');
        thiFrame = thiFrame.split(' ');
        thiFrame = thiFrame[3].split('-');
        thiFrame = parseInt(thiFrame[1]);
        var test = $(this).offset();
        if (test.left < -50) {
            $(this).remove();
            starcount--;
        }
        if (thiFrame == 7) {
            var l = $(this).offset();
            $(this).removeClass("repeat-" + String(secFrame)).addClass("repeat-" + String(parseInt(secFrame) + 1));
            $(this).removeClass("frame-" + String(thiFrame)).addClass("frame-1");
        } else {
            $(this).removeClass("frame-" + String(thiFrame)).addClass("frame-" + String(parseInt(thiFrame) + 1));
        }
    })
}

function animateStars2() {

    $(".speed-1").each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - 1) });
    });
    $(".speed-2").each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - 2) });
    });
    $(".speed-3").each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - 3) });
    });
    $(".speed-4").each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - 4) });
    });

    $('.star').each(function () {
        thisFrame = $(this).attr('class');
        thisFrame = thisFrame.split(' ');
        thisFrame = thisFrame[1].split('-');
        thisFrame = parseInt(thisFrame[1]);
        secFrame = $(this).attr('class');
        secFrame = secFrame.split(' ');
        secFrame = secFrame[2].split('-');
        secFrame = parseInt(secFrame[1]);
        thiFrame = $(this).attr('class');
        
        thiFrame = thiFrame.split(' ');
        // if (parseInt(thiFrame[2].split('-')[1]) > 5){
        //     $(this).remove();
        // }
        thiFrame = thiFrame[3].split('-');

        thiFrame = parseInt(thiFrame[1]);
        var test = $(this).offset();
        if (test.left < -50) {
            $(this).remove();
            starcount--;
        }
        if (thiFrame == 7) {
            var l = $(this).offset();
            $(this).removeClass("repeat-" + String(secFrame)).addClass("repeat-" + String(parseInt(secFrame) + 1));
            $(this).removeClass("frame-" + String(thiFrame)).addClass("frame-1");
        } else {
            $(this).removeClass("frame-" + String(thiFrame)).addClass("frame-" + String(parseInt(thiFrame) + 1));
        }
    })
}

var starcount = 0;

function placeStar() {
    // var rand = Math.floor(Math.random() * 4) + 1;
    var rand = 0;
    var newStar = $("<div class='star speed-" + rand + " repeat-1 frame-1'> <div class='wrapper speed-"+rand+"'><div class='dot dot-1'></div><div class='dot dot-2'></div><div class='dot dot-3'></div><div class='dot dot-4'></div><div class='dot dot-5'></div><div class='dot dot-6'></div><div class='dot dot-7'></div><div class='dot dot-8'></div><div class='dot dot-9'></div></div></div > ");
    newStar.css({
        top: Math.floor(Math.random() * screen.height),
        left: Math.floor(Math.random() * screen.width)
    });
    if (starcount < 30) {
        $('.bg').append(newStar);
        starcount++;
    }

}
