
/*SampleRequestPacketJson*/
var obj = { "vendorId": "iBank", "clientTransactionId": "TEWTPNU46S", "redirectUrl": "https://www.perfios.com/redirect/page", "transactionCompleteCallbackUrl": "https://www.perfios.com/complete/transaction/url", "dataParameters": { "pan": "BEFPN6666D", "dob": "1956-05-25" } };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "vendorId": "iBank", "clientTransactionId": "TEWTPNU46S", "redirectUrl": "https://www.perfios.com/redirect/page", "transactionCompleteCallbackUrl": "https://www.perfios.com/complete/transaction/url", "dataParameters": { "pan": "BEFPN6666D", "dob": "1956-05-25" } };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"expires\": \"2021-02-27 18:04:24 Asia\/Kolkata\", \n\"url\": \"https:\/\/apidemo.perfios.com\/KYCServer\/api\/v1\/tr\/241a41c0-9876-4c94-8aa3-9db21b7b5061\", \n\"generateLinkId\": \"241a41c0-9876-4c94-8aa3-9db21b7b5061\"\n} ";
}