
/*SampleRequestPacketJson*/
var obj = { "payload": { "processingType": "SALARY_SLIP", "uploadingScannedStatements": "true", "transactionCompleteCallbackUrl": "https://example.com/callback", "txnId": "ABC-PQ1342687YTX" } };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "payload": { "processingType": "SALARY_SLIP", "uploadingScannedStatements": "true", "transactionCompleteCallbackUrl": "https://example.com/callback", "txnId": "ABC-PQ1342687YTX" } };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"transaction\": {\"perfiosTransactionId\": \"XPJA1614170116347\"\n}\n} ";
}