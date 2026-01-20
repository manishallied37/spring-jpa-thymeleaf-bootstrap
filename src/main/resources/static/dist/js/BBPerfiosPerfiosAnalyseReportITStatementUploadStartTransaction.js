
/*SampleRequestPacketJson*/
var obj = { "clientTransactionId": "TEWTPNU46S", "gstNumber": "24AROPP8852E1ZD", "periodFrom": "072017", "periodTo": "062018", "redirectUrl": "https://www.google.com", "transactionCompleteUrl": "https://www.example.com", "dataFetchMode": "STATEMENT_UPLOAD" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "clientTransactionId": "TEWTPNU46S", "gstNumber": "24AROPP8852E1ZD", "periodFrom": "072017", "periodTo": "062018", "redirectUrl": "https://www.google.com", "transactionCompleteUrl": "https://www.example.com", "dataFetchMode": "STATEMENT_UPLOAD" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"success\": true, \n\"transactionId\": \"PG1MKQXKWY1ODVOJUCRVZ\", \n\"url\": \"https:\/\/apidemo.perfios.com\/KYCServer\/api\/v1\/gstpdfupload\/widget\/iBankGSTUpload\/PG1MKQXKWY1ODVOJUCRVZ\"\n} ";
}