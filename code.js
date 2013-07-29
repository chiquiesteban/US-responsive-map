var thissvg;
var highlighted = ["WA", "MA", "DC", "VA"];
var isFirefox = typeof InstallTrigger !== 'undefined';

$(document).ready(function(){

if(isFirefox == true) {
	console.log("Firefox");
	var mysvg = document.getElementById("svg");
	var mysvgw = mysvg.getAttributeNS(null,'width')
	mysvg.getAttributeNS('height', mysvgw*0.618);

	  $(".state").mouseover( function(evt){
	    	thissvg = evt.target;
			$(thissvg)
				.css("cursor","pointer")
				.css("opacity",".5")
				.css("filter","alpha(opacity=50%)");
		});
	  $(".state").mouseout( function(evt){
			thissvg = evt.target;
			$(thissvg)
				.css("opacity","1")
				.css("filter","alpha(opacity=100%)");
		});

	  $(window).resize(function(){
	  		mysvgw = mysvg.getAttributeNS(null,'width')
			mysvg.getAttributeNS('height', mysvgw*0.618);
		})

	  for (var i = 0; i < highlighted.length; i++) {
			$("#"+highlighted[i]).css("fill","#9B1518");
	   };

} else {
	console.log("NoFirefox");
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
}

});
