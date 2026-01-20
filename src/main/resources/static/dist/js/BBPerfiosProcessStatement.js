
/*SampleRequestPacketJson*/
var obj = {"vendorId": "iBankRetail", "perfiosTransactionId": "LDCD1614174438821", "payload":{"fileId": "16f90b7b62bdfc1c3f974160a597fecc8fb4cad4"}};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"vendorId": "iBankRetail", "perfiosTransactionId": "LDCD1614174438821", "payload":{"fileId": "16f90b7b62bdfc1c3f974160a597fecc8fb4cad4"}};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"bankStatement\": {\"bankAccounts\": \n[{\"accountId\": \"95531c8dbc5a237013475e313df9b6594d42bb56\", \n\"accountNumber\": \"50100236885645\", \n\"accountType\": \"\", \n\"complete\": true, \n\"institutionId\": \"20\", \n\"missingMonths\": []}\n]}\n} ";
}