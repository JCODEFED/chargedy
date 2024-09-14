


$(document).ready(function(){
    alert("This website is still in progress. Note: It is not fully responsive on all devices. For the best experience, please view it on a device with a width of 1225 pixels or more. Thank you.");
    


    $('.skills').hide();
    $('.menulist').hide();
    $('#educ').on('click', function(){
        $('#education').show(1000);
        $('.skills').hide(1000);
    })
    $('#menu').on('click', function(){
        $('.menulist').fadeToggle();

    })
    $('#skills').click(function(){
        $('#education').hide(1000);
        $('.skills').show(1000);
    })
    $('#night').on('click', function(){
        $('body').toggleClass('darkmode');
        if ($('body').hasClass('darkmode')) {
            $(this).css('color', 'white');
        } else {
            $(this).css('color', 'black'); 
        }
    })

    





})
