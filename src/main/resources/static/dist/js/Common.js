//pre lodader js
document.onreadystatechange = function() {
	var state = document.readyState
	setTimeout(function() {
		document.getElementById('load').style.visibility = "hidden";
	}, 1000);
}


//jquery for testing api
$(document).ready(function() {
	$("#buttonAdd").bind("click", function() {
		var div = $("<div />");
		div.html(GenerateTextbox(""));
		$("#TextBoxContainer").append(div);
	});
	$("#buttonGet").bind("click", function() {
		var values = "";
		$("input[name=CreateTextbox]").each(function() {
			values += $(this).val() + "\n";
		});
		alert(values);
	});
	$("body").on("click", ".remove", function() {
		$(this).closest("div").remove();
	});
});
function GenerateTextbox(value) {
	return '<label>Key ' + ' : </label>' + '&nbsp;&nbsp;' + '<input name = "CreateTextbox" type="text" value = "' + value + '" /> ' + '&nbsp;&nbsp;' +
		'<label>Value ' + ' : </label>' + '&nbsp;&nbsp;' +
		'<input name = "CreateTextbox" type="text" value = "' + value + '" /> ' + '&nbsp;&nbsp;' +
		'<input type="button" value="Remove" class="remove btn btn-danger" />' + '<br> <br>'
}

