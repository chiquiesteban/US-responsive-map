var thissvg;
var highlighted = ["WA", "MA", "DC", "VA"];

$(document).ready(function(){

  $("#svg").height($("#svg").width()*0.618)

    $(".state").mouseover( function(){
    	thissvg = $(event.target).parent();
		$(thissvg)
			.css("cursor","pointer")
			.css("opacity",".5")
			.css("filter","alpha(opacity=20%)");
	});
	$(".state").mouseout( function(){
		thissvg = $(event.target).parent();
		$(thissvg)
			.css("opacity","1")
			.css("filter","alpha(opacity=100%)");
	});

	$(window).resize(function(){
		$("#svg").height($("#svg").width()*0.618)
	})

	for (var i = 0; i < highlighted.length; i++) {
		$("#"+highlighted[i]).css("fill","#9B1518");
	};

});
