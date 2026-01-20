
/*SampleRequestPacketJson*/
var obj = {"vendorId": "iBank", "clientTransactionId": "TEWTPNU46S", "redirectUrl": "https://www.google.com", "dataParameters":{"gstNumber": "24AROPP8852E1ZD", "username": "demo1234", "periodFrom": "072017", "periodTo": "062018", "transactionCompleteUrl": "https://www.perfios.com/complete/transaction/url", "dataFetchMode": "API", "productType": "SMELoan", "additionalParams": "{'branchCode':'PERFIOS01', 'referenceId':'PERFIOS02'}"}};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"vendorId": "iBank", "clientTransactionId": "TEWTPNU46S", "redirectUrl": "https://www.google.com", "dataParameters":{"gstNumber": "24AROPP8852E1ZD", "username": "demo1234", "periodFrom": "072017", "periodTo": "062018", "transactionCompleteUrl": "https://www.perfios.com/complete/transaction/url", "dataFetchMode": "API", "productType": "SMELoan", "additionalParams": "{'branchCode':'PERFIOS01', 'referenceId':'PERFIOS02'}"}};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"expires\": \"2021-02-27 18:04:36 Asia\/Kolkata\", \n\"url\": \"https:\/\/apidemo.perfios.com\/KYCServer\/api\/v1\/tr\/71b3dfc2-d8fc-47c8-aa76-5b288381ab0e\", \n\"generateLinkId\": \"71b3dfc2-d8fc-47c8-aa76-5b288381ab0e\"\n} ";
}