$(document).ready(function () {
    $("div[id^='portfolioModal']").each(function () {
        var currentModal = $(this);
        //click next
        currentModal.find('.next').click(function () {
            currentModal.modal('hide');
            //            console.log(currentModal.closest());
            currentModal.nextAll("div[id^='portfolioModal']").first().modal('show');
        });

        //click prev
        currentModal.find('.prev').click(function () {
            currentModal.modal('hide');
            //            console.log(currentModal.closest("div[id^='portfolioModal']"));
            currentModal.prevAll("div[id^='portfolioModal']").first().modal('show');
        });
    });
});

// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function () {
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".carousel-control-prev").click(function () {
    $("#myCarousel").carousel("prev");
});

var i = 0;

function toggle() {
    if (i = 0) {
        document.getElementById("arrow").style.transform = 'rotate(-180deg)';
        document.getElementById("menu").style.left = '0';
        i = 1;
    } else {
        document.getElementById("arrow").style.transform = 'rotate(0deg)';
        document.getElementById("menu").style.left = '100px';
        i = 0;
    }
}
