
/*SampleRequestPacketJson*/
var obj = { "vendorId": "iBankGSTUpload", "perfiosTransactionId": "PGXESBHMMXCUP4NJ965TZ" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "vendorId": "iBankGSTUpload", "perfiosTransactionId": "PGXESBHMMXCUP4NJ965TZ" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"code\": \"GSTReportGenerationFailed\", \n\"message\": \"Could not generate report. Please try again\", \n\"success\": false\n} ";
}