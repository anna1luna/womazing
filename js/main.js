$(document).ready(function () {
    $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");
    }
});
   
    $('.new-slide1').click(function () {
        $('.new-slider').attr('src', 'img/slide-1.jpg')
        $('.new-slide1').css('fill', 'black')
        $('.new-slide2').css('fill', '#D1D1D1')
        $('.new-slide3').css('fill', '#D1D1D1')
        $('.new-txt').html('Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.')
    })
     $('.new-slide2').click(function () {
         $('.new-slider').attr('src', 'img/slide-2.jpg')
         $('.new-slide2').css('fill', 'black')
         $('.new-slide1').css('fill', '#D1D1D1')
         $('.new-slide3').css('fill', '#D1D1D1')
         $('.new-txt').html('Базовый гардероб - вот то, что всегда пригодится вне зависиомсти от сезона. Время исследовать.')
    })
    $('.new-slide3').click(function () {
        $('.new-slider').attr('src', 'img/slide-3.jpg')
        $('.new-slide3').css('fill', 'black')
        $('.new-slide1').css('fill', '#D1D1D1')
        $('.new-slide2').css('fill', '#D1D1D1')
        $('.new-txt').html('Спортивные костюмы - для тех кто выбирает активный образ жизни. Время исследовать.')
    })
    //team slider buttons
    $('.team-slide1').click(function () {
        $('.team-slide').attr('src', '/img/team1.jpg')
        $('.team-slide1').css('fill', 'white')
        $('.team-slide2').css('fill', 'rgba(255, 255, 255, 0.36)')
        $('.team-slide3').css('fill', 'rgba(255, 255, 255, 0.36)')
    })
     $('.team-slide2').click(function () {
        $('.team-slide').attr('src', '/img/team2.jpg')
        $('.team-slide2').css('fill', 'white')
        $('.team-slide1').css('fill', 'rgba(255, 255, 255, 0.36)')
        $('.team-slide3').css('fill', 'rgba(255, 255, 255, 0.36)')

    })
    $('.team-slide3').click(function () {
        $('.team-slide').attr('src', '/img/team3.jpg')
        $('.team-slide3').css('fill', 'white')
        $('.team-slide2').css('fill', 'rgba(255, 255, 255, 0.36)')
        $('.team-slide1').css('fill', 'rgba(255, 255, 255, 0.36)')
    })
    //team slider arrows
    var i = 0
        $('.team-arrowr').on('click', function () {
        // to make slides move
        i = i + 1
        if (i > 3) {
            i=1}
        $('.team-slide').attr('src', '/img/team' + i + '.jpg')       
        // to make button move
        $('.team-slide' + i).css('fill', 'white')
        // to make others grey 
        $('.team-slide' + (i - 1)).css('fill', 'rgba(255, 255, 255, 0.36)')
        $('.team-slide' + (i+2)).css('fill', 'rgba(255, 255, 255, 0.36)')
    })
    $('.team-arrowl').click(function () {
        // to make slides move
        i = i - 1
        if (i < 1) {
            i=3}
        $('.team-slide').attr('src', '/img/team' + i + '.jpg')  
        // to make button move
        $('.team-slide' + i).css('fill', 'white')
        // to make others grey 
        $('.team-slide' + (i + 1)).css('fill', 'rgba(255, 255, 255, 0.36)')
        $('.team-slide' + (i-2)).css('fill', 'rgba(255, 255, 255, 0.36)')

    })
    // overlay for each container
    var img1 = $('.in-pic-container')[0]
    var img2 = $('.in-pic-container')[1]
    var img3 = $('.in-pic-container')[2]
    var overlay1 = $('.in-pic-overlay')[0]
    var overlay2 = $('.in-pic-overlay')[1]
    var overlay3 = $('.in-pic-overlay')[2]
        $(img1).mouseover(function () {
        $(overlay1).removeClass('hidden')
        $(overlay1).addClass('active')
        }) 
        $(img2).mouseover(function () {
        $(overlay2).removeClass('hidden')
        $(overlay2).addClass('active')
        }) 
        $(img3).mouseover(function () {
        $(overlay3).removeClass('hidden')
        $(overlay3).addClass('active')
        })
        $('.in-pic-container').mouseout(function () {
        $('.in-pic-overlay').removeClass('active')
        $('.in-pic-overlay').addClass('hidden')
        })
    
    // modal
    $('.header-phone').click(function () {
        $("body").css("overflow", "hidden")
        $('.modal-container').addClass('active')
    })
    $('.modal-close').click(function () {
        $("body").css("overflow", "")
        $('.modal-container').removeClass('active')
    })
    // modal response
    $('.modal-btn').click(function () {
        $('.modal-container').removeClass('active')
        $('.modal-done-container').addClass('active')
    })
    $('.modal-done-btn').click(function () {
        $("body").css("overflow", "")
        $('.modal-done-container').removeClass('active')
    })
})