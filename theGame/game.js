$(document).ready(function(){
	$("#Start").click(function(){
		$("#wrapperID").toggleClass("secondWrapper");
		$("#wrapperID").toggleClass("wrapper");
	    $("#Start").toggleClass("hidden");
	    $(".tool").toggleClass("hidden");
	});
	$("#tool").click(function(){
		$("#wrapperID").toggleClass("secondWrapper");
		$("#wrapperID").toggleClass("thirdWrapper");
		$(".tool").toggleClass("hidden");
		$("#over").toggleClass("hidden");
	});
	$("#light").click(function() {
		$("#wrapperID").toggleClass("secondWrapper");
		$("#wrapperID").toggleClass("fourthWrapper");
		$(".tool").toggleClass("hidden");
		$("#win").toggleClass("hidden");
	});
});