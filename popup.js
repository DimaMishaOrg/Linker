var main = function () {

    var hoverIn = function (e) {
        $(this).find('.del').show();
    };

    var hoverOut = function (e) {
        $(this).find('.del').hide();
    };

    //$('.post').hover(hoverIn, hoverOut);

    $('#posts').on('mouseenter','.post',hoverIn);

    $('#posts').on('mouseleave','.post',hoverOut);

    /*Deletion*/
    var del = function () {
        $(this).parent().remove();
    };
	$('#posts').on('click','.del',del);
	

    $('#addLink').click(function () {

        var newDiv = $('<div>');
        newDiv.text('New link');
        newDiv.addClass("post");
        $('#posts').prepend(newDiv)
       // newDiv.insertBefore(".post:first");
		var newA = $('<a>');
		newA.addClass("del");
		newA.text('Удалить');
		newDiv.append(newA);
		newA.attr({href:"#"});
    });

}
$(main);