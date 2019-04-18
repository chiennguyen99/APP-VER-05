$("#selectAll").change(function(){
	$(".checkitem").prop("checked", $(this).prop("checked"))
}); 

$(".checkitem").change(function(){
	if($(this).prop("checked") == false){
		$("#selectAll").prop("checked", false)
	}
	if($(".checkitem:checked").length == $(".checkitem").length){
		$("#selectAll").prop("checked", true)
	}
}); 

function checkitemchange(){
	$(".checkitem").change(function(){
		if($(this).prop("checked") == false){
			$("#selectAll").prop("checked", false)
		}
		if($(".checkitem:checked").length == $(".checkitem").length){
			$("#selectAll").prop("checked", true)
		}
	}); 
}

function selectallchange(){
	$("#selectAll").change(function(){
		$(".checkitem").prop("checked", $(this).prop("checked"))
	}); 	
}