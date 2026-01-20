
/*SampleRequestPacketJson*/
var obj = { "payload": { "apiVersion": "2.1", "vendorId": "iBankSME", "perfiosTransactionId": "ZC6B1608717879489" } };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "payload": { "apiVersion": "2.1", "vendorId": "iBankSME", "perfiosTransactionId": "ZC6B1608717879489" } };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"Accepted\": {\n\"message\": \"Transaction submitted for processing\"\n}\n} ";
}