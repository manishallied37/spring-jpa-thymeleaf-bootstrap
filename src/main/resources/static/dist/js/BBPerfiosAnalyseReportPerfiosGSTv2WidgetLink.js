
/*SampleRequestPacketJson*/
var obj = {"vendorId": "iBank", "transactionId": "PGXN3NKA7JBRB3VOQCVTZ"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"vendorId": "iBank", "transactionId": "PGXN3NKA7JBRB3VOQCVTZ"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = "  Success response will be in HTML format  ";
}