﻿var main = function () {

    var hoverIn = function (e) {
        $(this).find('.del').show();
    }

    var hoverOut = function (e) {
        $(this).find('.del').hide();
    }

    $('.post').hover(hoverIn, hoverOut);

    /*Deletion*/
    $('.del').click(function () {
        $(this).parent().remove();
    });

    /*Adding*/
    $('#addLink').click(function () {
/*Addоооing*/
        $('.link').text('123');
<<<<<<< HEAD

        //TEST
/*Addоооing*//*Addоооing*//*Addоооing*//*Addоооing*//*Addоооing*//*Addоооing*//*Addоооing*//*Addоооing*//*Addоооing*/
=======
/*Addоооing*/
>>>>>>> origin/master
        var newDiv=$('<div>');
        newDiv.text('New link');
        newDiv.addClass("post")
        newDiv.insertBefore(".post:first");
    });

}

$(main);