﻿var main = function () {

    var hoverIn = function (e) {
        $(this).find('.del').show();
    };

    var hoverOut = function (e) {
        $(this).find('.del').hide();
    };

    //$('.post').hover(hoverIn, hoverOut);

    $('body').on('mouseenter','.post',hoverIn);

    $('body').on('mouseleave','.post',hoverOut);

    /*Deletion*/
    var delet = function () {
        $(this).parent().remove();
    };
	$('body').on('click','.del',delet);
	

    $('#addLink').click(function () {

        var newDiv = $('<div>');
        newDiv.text('New link');
        newDiv.addClass("post");
        newDiv.insertBefore(".post:first");
		var newA = $('<a>');
		newA.addClass("del");
		newA.text('Удалить');
		newDiv.append(newA);
		newA.attr({href:"#"});
    });

}
$(main);