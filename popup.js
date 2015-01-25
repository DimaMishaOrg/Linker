var main = function() {

	var hoverIn=function(e){
	this.find('.del').show();
	}

	var hoverOut=function(e){
	this.find('.del').hide();
	}

	$('.post').hover(hoverIn,hoverOut);



}

$(main);