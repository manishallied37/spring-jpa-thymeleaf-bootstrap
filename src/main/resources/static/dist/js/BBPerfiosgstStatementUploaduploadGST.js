
/*SampleRequestPacketJson*/
var obj = { "vendorId": "iBankGSTUpload", "perfiosTransactionId": "PG1MKQXKWY1ODVOJUCRVZ", "fileName": "XYZ.pdf", "file": "<Base64 encoded>" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "vendorId": "iBankGSTUpload", "perfiosTransactionId": "PG1MKQXKWY1ODVOJUCRVZ", "fileName": "XYZ.pdf", "file": "<Base64 encoded>" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = "  {\n\"success\": true, \n\"transactionId\": \"PG1MKQXKWY1ODVOJUCRVZ\"\n}  ";
}