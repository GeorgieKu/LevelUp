const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
});


var clock = $('.clock').FlipClock({
    clockFace: 'DailyCounter',
    autoStart: false,

    callbacks: {
        stop: function() {
            $('.message').html('Распродажа закончилась!')
        }
    },

});

// set time
clock.setTime(1800);

// countdown mode
clock.setCountdown(true);

// start the clock
clock.start();