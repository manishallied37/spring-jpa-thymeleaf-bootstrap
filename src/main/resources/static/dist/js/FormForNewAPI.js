
// BS-Stepper Init
document.addEventListener('DOMContentLoaded', function() {
	window.stepper = new Stepper(document.querySelector('.bs-stepper'))
})



/*$("#quickForm").on('submit', function(e) {
		e.preventDefault();
		alert("The form was submitted");
		});

function myFunction(e) {
	e.preventDefault();
  alert("The form was submitted");
}*/

/*$(function() {  
            $('#nextBtn').click(function() {  
                var txt = $('#apiName');  
                if (txt.val() != null && txt.val() != '') {  
                    alert('you entered text ' + txt.val())  
                    stepper.next();
                } else {  
                      
                    $("#apiNameError").text("Please Enter the API Name");
                }  
            })  
        }); */

//jquery for input parameters
//=--------------------------==============---------------------
/*$("#table1").ready(function() {
	
	
	function remove() {
		$(".red").click(function() {
			$(this).closest("tr").remove();
		});
	}
	remove();
	$(".add-form").on('submit', function(e) {
		e.preventDefault();
		if ($("input[name=name]").val(), $("input[name=name]").val(), $("input[name=name]").val(), $("input[name=name]").val() == "") {
			$(".alert").addClass("active");
			$(".remove").click(function() {
				$(".alert").removeClass("active");
			});
		} else {
			var name = $("input[name=name]").val();
			var type = $("input[name=type]").val();
			var description = $("input[name=description]").val();
			var mandatory = $("input[name=mandatory]").val();
			$(".first-tr").after('<tr>><td>' + name + '</td><td>' + type + '</td><td>' + description + '</td><td>' + mandatory + '</td><td class="static"><span class="button red"><input type="button" value="Remove" class="remove btn btn-danger" /></span></td></tr>');
			remove();
			$("input[name=name], input[name=type], input[name=description], input[name=mandatory]").val("");
		}
	});
});*/

/*$('#table2').click(function(e) {  
e.preventDefault();
	alert('formsubmited');

});*/

//jquery for output parameters
//=--------------------------==============---------------------
/*$("#table2").ready(function() {
	function remove() {
		$(".red1").click(function() {
			$(this).closest("tr").remove();
		});
	}
	remove();
	$(".add-form1").on('submit', function(e) {
		e.preventDefault();
		if ($("input[name=name1]").val(), $("input[name=name1]").val(), $("input[name=name1]").val() == "") {
			$(".alert").addClass("active");
			$(".remove1").click(function() {
				$(".alert").removeClass("active");
			});
		} else {
			var name1 = $("input[name=name1]").val();
			var type1 = $("input[name=type1]").val();
			var description1 = $("input[name=description1]").val();
			$(".first-tr1").after('<tr><td>' + name1 + '</td><td>' + type1 + '</td><td>' + description1 + '</td><td class="static1"><span class="button red1"><input type="button" value="Remove" class="remove btn btn-danger" /></span></td></tr>');
			remove();
			$("input[name=name1], input[name=type1], input[name=description1]").val("");
		}
	});
});*/


//jquery for possible errors
//=--------------------------==============---------------------
/*$("#table3").ready(function() {
	function remove() {
		$(".red2").click(function() {
			$(this).closest("tr").remove();
		});
	}
	remove();
	$(".add-form2").on('submit', function(e) {
		e.preventDefault();
		if ($("input[name=errorCode]").val(), $("input[name=errorCode]").val(), $("input[name=errorCode]").val() == "") {
			$(".alert").addClass("active");
			$(".remove2").click(function() {
				$(".alert").removeClass("active");
			});
		} else {
			var errorCode = $("input[name=errorCode]").val();
			var errorName = $("input[name=errorName]").val();
			var errorLogs = $("input[name=errorLogs]").val();
			$(".first-tr2").after('<tr><td>' + errorCode + '</td><td>' + errorName + '</td><td>' + errorLogs + '</td><td class="static2"><span class="button red2"><input type="button" value="Remove" class="remove btn btn-danger" /></span></td></tr>');
			remove();
			$("input[name=errorCode], input[name=errorName], input[name=errorLogs]").val("");
		}
	});
});*/




        
        

// view Information Notification   
/*$('#inputParameter')
	.click(
		function () {
			var tempString = "Fetch";

			var pageValJson = "{\"ntfActionStatus\":"
				+ "\"" + tempString + "\"}";


			document.getElementById('load').style.visibility = "visible";

			// ajax call
			$
				.ajax({
					url: 'inputParameter',
					type: "POST",
					data: {
						pageValJson: pageValJson
					},// important line for thymeleaf http security
					headers: {
						"X-CSRF-TOKEN": $(
							"input[name='_csrf']")
							.val()
					},
					cache: false,
					// async:true,
					success: function (response) {
						setTimeout(
							function () {
								document.getElementById('interactive');
								document.getElementById('contents').style.visibility = "visible";
							}, 1000);

						document.getElementById('load').style.visibility = "hidden";

						var jsonResponse = JSON.stringify(response);
						var obj = JSON.parse(jsonResponse);

						$(".tempAlert").empty();
						obj.forEach(function (items) {
							$(
								"<p class='test'><div class='time-label'><span class='bg-success'>"
								+ items.actDate
								+ "</span></div>"
								+ "<div><i class='fas fa-comments bg-warning'></i>"
								+ "<div class='timeline-item'>"
								+ "<h3 class='timeline-header text-capitalize'><a href='#'>"
								+ items.userName
								+ " "
								+ " ("
								+ items.userRole
								+ ") </a>"
								+ items.actionPerformed
								+ "</h3>"
								+ "<div class='timeline-body'>"
								+ items.actionComment
								+ "</div>"
								+ "</div>"
								+ "</div>"
								+ "</p>")
								.appendTo(
									".timeline-inverse");
						});

						$('#tempAlert').show();

					},
					error: function (xhr, status, error) {
						console.log(xhr);
						console.log(status);
						console.log(error);
						toastr
							.success('Some Error Occured');
					}
				});
		});*/


/* Form Validation */

/*jquery('#basicform').validate({
	rules: {
		apiName: {
			required: true
		},
		apiDescription: {
			required: true
		},
		name: {
			required: true
		},
		type: {
			required: true
		},
		description: {
			required: true
		},
		mandatory: {
			required: true
		},
		samplePacketReq: {
			required: true
		},
		testReq: {
			required: true
		},
		testRes: {
			required: true
		},
	},
	messages: {
		apiName: {
			required: "Please Provide API Name"
		},
		apiDescription: {
			required: "Please Provide API Description"
		},
		name: {
			required: "Please Provide  Name"
		},
		type: {
			required: "Please Provide Type"
		},
		description: {
			required: "Please Provide Description"
		},
		mandatory: {
			required: "Please Provide Mandatory"
		},
		samplePacketReq: {
			required: "Please Provide Sample Packet Request"
		},
		testReq: {
			required: "Please Provide  Packet Request"
		},
		testRes: {
			required: "Please Provide  Packet Response"
		},

	},
	errorElement: 'span',
	errorPlacement: function(error, element) {
		error.addClass('invalid-feedback');
		element.closest('.form-group').append(error);
	},
	highlight: function(element, errorClass, validClass) {
		$(element).addClass('is-invalid');
	},
	unhighlight: function(element, errorClass, validClass) {
		$(element).removeClass('is-invalid');
	},
	submitHandler: function(form) {

		
		form.submit();

	}
});
*/



		/*$(function () {
			$.validator.setDefaults({
				submitHandler: function () {
					alert("Form successful submitted!");
				}
			});
			$('#nextBtn').validate({
				rules: {
		apiName: {
			required: true
		},
		apiDescription: {
			required: true
		},
		
		
		samplePacketReq: {
			required: true
		},
		testReq: {
			required: true
		},
		testRes: {
			required: true
		},
	},
	messages: {
		apiName: {
			required: "Please Provide API Name"
		},
		apiDescription: {
			required: "Please Provide API Description"
		},
		
		samplePacketReq: {
			required: "Please Provide Sample Packet Request"
		},
		testReq: {
			required: "Please Provide  Packet Request"
		},
		testRes: {
			required: "Please Provide  Packet Response"
		},

	},
				errorElement: 'span',
				errorPlacement: function (error, element) {
					error.addClass('invalid-feedback');
					element.closest('.form-group').append(error);
				},
				highlight: function (element, errorClass, validClass) {
					$(element).addClass('is-invalid');
				},
				unhighlight: function (element, errorClass, validClass) {
					$(element).removeClass('is-invalid');
				}
			});
		});*/








