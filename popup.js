var main = function () {

    var hoverIn = function (e) {
        $(this).find('.del').show();
    };

    var hoverOut = function (e) {
        $(this).find('.del').hide();
    };
	//принудительные установщики registred
	var regT = function () {
		chrome.storage.local.set({
		registered: true
		})
	}
	var regF = function () {
		chrome.storage.local.set({
		registered: false
		})
	}
	
	$('#regTrue').click(regT);
	$('#regFalse').click(regF);
	
	
	
	
	
	
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

        var addLink = function (currentUrl) {
            var newDiv = $('<div>');
            newDiv.text(currentUrl);
            newDiv.addClass("post");
            posts.prepend(newDiv);
            // newDiv.insertBefore(".post:first");
            var newA = $('<a>');
            newA.addClass("del");
			newA.addClass("hidden");
            newA.text('Удалить');
            newDiv.append(newA);
            newA.attr({href: "#"});

        }

        getCurrentUrl(addLink);
    });

    function getCurrentUrl(callback) {

        chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
            function (tabs) {
                callback(tabs[0].url);
            }
        );

    }
	/*getstoragevalues*/
	
	
	
	
	function getIsRegistered(callback) {
		chrome.storage.local.get("registered", function (items) {
		callback(items.registered === true);
		})
		
	}
	
	
function updateView(isRegistered)	{

	if (isRegistered){
	 $('#main').show();
	 $('#popup').hide();
	}
	else {
	$('#popup').show();
	$('#main').hide();
	}
		

}
	
getIsRegistered(updateView);
	
};
$(main);