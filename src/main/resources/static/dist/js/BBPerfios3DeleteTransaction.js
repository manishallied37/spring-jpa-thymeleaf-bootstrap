
/*SampleRequestPacketJson*/
var obj = { "vendorId": "iBankRetail", "perfiosTransactionId": "XPKL1614185835000" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "vendorId": "iBankRetail", "perfiosTransactionId": "XPKL1614185835000" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = "  {\n\"error\": {\"code\": \"TransactionDeleted\", \n\"message\": \"The Perfios Transaction referred to by the Client has been deleted\"\n}\n}  ";
}