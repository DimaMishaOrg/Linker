﻿﻿
var main = function () {

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

    $('#addLink').click(function () {

        var newDiv = $('<div>');
        newDiv.text('New link');
        newDiv.addClass("post")
        newDiv.insertBefore(".post:first");
		var newA = $('<a>');
		newA.addClass("del");
		newA.text('Удалить');
		newDiv.append.child(newA);
		
    });

}
$(main);