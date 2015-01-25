var main = function() {

	var hoverIn=function(e){
	$(this).find('.del').show();
	}

	var hoverOut=function(e){
	$(this).find('.del').hide();
	}

	$('.post').hover(hoverIn,hoverOut);

	/*Deletion*/
	$('.del').click(function() {
	$(this).parent().remove();
	});
	
	/*Adding*/
	$('.addLink').click(function() {
	$('.link').text('123');
	});

}

$(main);