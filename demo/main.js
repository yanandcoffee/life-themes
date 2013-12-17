$(document).ready(function(){
	$("#theme-select").change(function(){
		var theme = $("option:selected").val();
		var type = $("option:selected").attr("rel");
		$("#select-wrapper").addClass(function(index, currentClass){
			if (currentClass !== type) {
				$("#select-wrapper").removeClass(currentClass);
				return type;
			}
		});
		$("body").addClass(function(index, currentClass){
			if (currentClass !== theme){
				$("body").removeClass(currentClass);
				return theme;
			}
		});
	});
});