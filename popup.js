var main = function () {

    var hoverIn = function (e) {
        $(this).find('.del').show();
    };

    var hoverOut = function (e) {
        $(this).find('.del').hide();
    };

    //$('.post').hover(hoverIn, hoverOut);

    var posts = $('#posts');

    posts.on('mouseenter', '.post', hoverIn);

    posts.on('mouseleave', '.post', hoverOut);

    /*Deletion*/
    var del = function () {
        $(this).parent().remove();
    };
    posts.on('click', '.del', del);


    $('#addLink').click(function () {

        var newDiv = $('<div>');
        newDiv.text(getCuurentUrl());
        newDiv.addClass("post");
        posts.prepend(newDiv);
        // newDiv.insertBefore(".post:first");
        var newA = $('<a>');
        newA.addClass("del");
        newA.text('Удалить');
        newDiv.append(newA);
        newA.attr({href: "#"});
    });

    function getCuurentUrl() {
        //todo получение текущего адреса
        return 'New link';
    }

};
$(main);