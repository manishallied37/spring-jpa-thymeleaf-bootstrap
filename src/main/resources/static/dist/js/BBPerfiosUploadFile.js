
/*SampleRequestPacketJson*/
var obj = {"vendorId": "iBankRetail", "perfiosTransactionId": "LDCD1614174438821", "fileName": "statement1.pdf", "file": "<Base64 encoded fie>"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"vendorId": "iBankRetail", "perfiosTransactionId": "LDCD1614174438821", "fileName": "statement1.pdf", "file": "<Base64 encoded fie>"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"file\": {\"fileId\": \"16f90b7b62bdfc1c3f974160a597fecc8fb4cad4\"}\n} ";
}