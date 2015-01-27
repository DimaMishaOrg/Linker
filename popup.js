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

        getCurrentUrl(function (url) {
            var newDiv = $('<div>');
            newDiv.text(url);
            newDiv.addClass("post");
            posts.prepend(newDiv);
            // newDiv.insertBefore(".post:first");
            var newA = $('<a>');
            newA.addClass("del");
            newA.text('Удалить');
            newDiv.append(newA);
            newA.attr({href: "#"});

        })
    });

    function getCurrentUrl(callback) {

        chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
            function (tabs) {
                callback = tabs[0].url;
            }
        );

    }

};
$(main);