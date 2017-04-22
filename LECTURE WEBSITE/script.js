$(document).ready(function(){

	var number = document.getElementsByClassName("sect").length;

	for(i=1; i <= number; i++) {
		eval("$(\"#t"+i+"head\").click(function(){  $(\"#topic"+i+"\").toggle(200);});");
		eval("$(\"#topic"+i+"\").hide();");
	}

	// $("#topic4").show(); // automatically shows a topic content

});