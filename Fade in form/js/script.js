$(function(){
	$("li, #circle").click(function(){
		
		$("#circle").toggleClass("circleExpand");
		$("#questionDiv, form, label").fadeToggle(600);
	
	});//circle click end

	$("#question").click(function(){
		
		$("label").addClass("animate");

	});//form click end
	
	
});//JQUERY END