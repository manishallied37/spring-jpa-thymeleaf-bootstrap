
/*SampleRequestPacketJson*/
var obj = { "vendorId": "iBankRetail", "payload": { "loanAmount": 100000, "loanDuration": 24, "loanType": "Home", "transactionCompleteCallbackUrl": "https://example.com/callback", "txnId": "ABC-PQ1342687YTX", "yearMonthFrom": "2020-04", "yearMonthTo": "2020-04" } };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "vendorId": "iBankRetail", "payload": { "loanAmount": 100000, "loanDuration": 24, "loanType": "Home", "transactionCompleteCallbackUrl": "https://example.com/callback", "txnId": "ABC-PQ1342687YTX", "yearMonthFrom": "2020-04", "yearMonthTo": "2020-04" } };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"transaction\": {\"perfiosTransactionId\": \"LDCD1614174438821\"\n}\n} ";
}