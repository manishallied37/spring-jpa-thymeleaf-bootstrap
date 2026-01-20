
/*SampleRequestPacketJson*/
var obj = { "vendorId": "iBankRetail", "perfiosTransactionId": "XPKL1614185835000"  };

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
	document.getElementById('ResponseJson').innerHTML = "  {\n\"error\": {\"code\": \"NoActiveTransaction\", \n\"message\": \"We could not find an active transaction corresponding to this transaction Id\"}\n}  ";
}